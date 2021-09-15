import { ToastController } from '@ionic/angular';
import { UploadService } from './../../services/upload/upload.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { environment } from 'src/environments/environment';
import useQuery from '../../api/queries';

type MenuData = {menu: any, __type?: any};


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  menuData: any;
  menuFields: any;
  menuObs = new BehaviorSubject({});
  omitFields = ['id', 'display', 'created_at', 'updated_at', 'published_at'];

  disableMenu = true;
  menuForm = new FormGroup({
    name: new FormControl(''),
    breakfast: new FormControl(''),
    vegetarian: new FormControl(''),
    lunch: new FormControl(''),
    snack: new FormControl(''),
    supper: new FormControl(''),
  });


  constructor(
    private api: ApiService,
    private apollo: Apollo,
    private upload: UploadService,
    private cd: ChangeDetectorRef,
    private toast: ToastController,

  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getValue({ value, type = 'default' }): string | number | Date {
    const valueMap = {
      DateTime: new Date(value),
      String: value,
      Boolean: value,
      ID: value,
      default: value,
      UploadFile: value
    };

    return valueMap[type];
  }

  getEntries(item): Array<{ name: string, value: any}>{
    return Object.entries(item).reduce((acc, [name, value]) => {
      return [...acc, {name, value}];
    }, []);
  }

  generateValues(fields, item): Record<string, any> {
    const formFields = fields.reduce((acc, field) => [...acc, field.name], []);
    return this.getEntries(item).reduce((acc, entry) => {
      const returnValue = formFields.includes(entry.name) ? { [entry.name]: this.getValue(entry.value) } : {};
      return {...acc, ...returnValue};
    }, {});
  }

  private getData(): void {
    const watchQuery = this.apollo.watchQuery({
      query: useQuery('menu'),
      pollInterval: environment.production
      // production polls every 24 hrs
      ? 1000 * 60 * 60 * 24
      // development polls every 2 seconds
      : 2000,
    });

    watchQuery.valueChanges.subscribe(({ data }) => {
      const { id, __typename, display, ...formValues } = (data as MenuData)?.menu;
      this.menuForm.setValue(formValues);
      const menuData = this.api.formatData('menu', data);
      this.menuObs.next(menuData);
    });

    this.menuObs.subscribe((obs: any) => {
      this.menuData = obs.data;
      console.log('🔥', this.menuData);
      this.menuFields = obs?.fields?.filter((field: { name: string, value: string | boolean | Array<any> }) =>
        !this.omitFields.includes(field.name));
    });
  }

  onFileChange(e): void {
    e.preventDefault();
    const reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      console.log({ file });
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('files', file);
      console.log({ formData });
      this.upload.uploadFile(formData).subscribe(res => {
        if (res.length) {
          console.log({res});
          this.menuForm.patchValue({
            [e.target.id]: res?.[0].id
          });
          console.log('menu form', this.menuForm);
        }
        console.log('menu data', e.target.id);
        this.menuData = [{
          ...this.menuData[0], [e.target.name]: {
            type: 'UploadFile',
            value: [{name: res?.[0].name,
              id: res?.[0].id,
            url: res?.[0].url}]
        } }];
        console.log('menu data', this.menuData);

      });
      this.cd.markForCheck();
    }
  }

  public menuSubmit(): void {
    const data = this.menuForm.value;
    console.log({ data });
    this.api
      .update('menu', 1, data)
      .toPromise()
      .then((success) => this.onSuccess(success))
      .catch((err) => this.onError(err));
  }

  async onError(err): Promise<any> {
    const toast = await this.toast.create({
      message: 'Something Went Wrong',
      color: 'danger',
    });
    await toast.present();
  }

  async onSuccess(success): Promise<any> {
    const toast = await this.toast.create({
      message: `Menus Updated Successfully`,
      color: 'success',
    });
    await toast.present();
  }

  async onToggle(e): Promise<void> {
    const { checked } = e.currentTarget;

    this.api.update('menu', 1, {
      display: checked
    }).toPromise().then(success => {
      this.api.refresh('menu');
    });
  }


  inputTypes(type: string): string {
    return {
      DateTime: 'date',
      Boolean: 'checkbox',
      String: 'text',
      ID: 'text',
      UploadFile: 'file'
    }[type];
  }

  public formatValue(value: any, type: any): string | number | Date {
    return {
      DateTime: value ? new Date(value).toLocaleDateString('en-us') : new Date().toLocaleDateString(),
      Boolean: value ? '🟢' : '🔴',
      String: value || 'N/A',
      ID: value,
      UploadFile: value?.length ? value?.name : 'N/A'
    }[type];
  }

  public getIcon(name): string {
    return {
      breakfast: 'cafe-outline',
      lunch: 'fast-food-outline',
      snack: 'nutrition-outline',
      supper: 'pizza-outline'
    }[name];
  }

  clickUpload(e): void {
    document.getElementById(e.target.name).click();
  }
}
