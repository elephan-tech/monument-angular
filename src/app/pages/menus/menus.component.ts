import { Component, OnInit } from '@angular/core';
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
    lunch: new FormControl(''),
    snack: new FormControl(''),
    supper: new FormControl(''),
  });


  constructor(
    private api: ApiService,
    private apollo: Apollo
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
      console.log({data});
      const { id, __typename, display, ...formValues } = (data as MenuData)?.menu;
      this.menuForm.setValue(formValues);
      const menuData = this.api.formatData('menu', data);
      console.log({menuData});
      this.menuObs.next(menuData);
    });

    this.menuObs.subscribe((obs: any) => {
      this.menuData = obs.data;
      this.menuFields = obs?.fields?.filter((field: { name: string, value: string | boolean | Array<any> }) =>
        !this.omitFields.includes(field.name));
    });
  }
  public alertSubmit(): void {
    const data = this.menuForm.value;
    this.api
      .update('menu', 1, data)
      .toPromise()
      .then()
      .catch((err) => console.error({ err }));
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
}
