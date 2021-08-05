import { GenericObject } from './../../../models/generic';
import { UploadService } from './../../../services/upload/upload.service';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { camelCase, startCase, filter } from 'lodash';
import pluralize from 'pluralize';
import { Observable } from 'rxjs';
import { ApiService } from './../../../services/api/api.service';

import Classic from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-collection-modal',
  templateUrl: './collection-modal.component.html',
  styleUrls: ['./collection-modal.component.scss'],
})
export class CollectionModalComponent implements OnInit {
  @Input() data: any;
  @Input() fields: any;
  @Input() form: FormGroup;
  @Input() collection: string ;
  @Input() editMode: boolean;
  @Input() id: string;
  collectionObs: Observable<any>;
  specialFields = ['Id', 'Date', 'Display'];
  entry: any;
  promise: Promise<any>;
  clearInput = false;
  fieldTypes = {
    UploadFile: 'file',
    String: 'text',
    Boolean: 'radio',
    DateTime: 'date'
  };
  currentData: any;
  public Editor = Classic;


  constructor(
    private api: ApiService,
    private mc: ModalController,
    private toast: ToastController,
    private cd: ChangeDetectorRef,
    private upload: UploadService
  ) {

   }

  getValue({ value, type = 'default' }): string | number | Date {
    if (type === 'UploadFile') { console.log({value}); }
    const valueMap = {
      DateTime: new Date(value).toLocaleDateString(),
      String: value,
      Boolean: value,
      ID: value,
      default: value,
      UploadFile: value,
      Time: value,
      Date: value
    };

    return valueMap[type];
  }

  getEntries(item): Array<{name: string, value: string | any}> {
    return Object.entries(item).reduce((acc, [name, value]) => {
      return [...acc, {name, value}];
    }, []);
  }

  generateValues(item): GenericObject {
    const formFields = this.fields.reduce((acc, field) => [...acc, field.name], []);
    return this.getEntries(item).reduce((acc, entry) => {
      const returnValue = formFields.includes(entry.name) ? { [entry.name]: this.getValue(entry.value) } : {};
      return {...acc, ...returnValue};
    }, {});
  }

  ngOnInit(): void {
    this.collection = startCase(this.collection);
    this.clearInput = false;
    this.entry = startCase(pluralize.singular(this.collection));

    const currentDataValues = this.data.reduce((acc, item) => {
      const values = this.generateValues(item);
      return [...acc, values];
    }, []);

    const [currentData] = currentDataValues.filter(data => data.id === this.id);

    this.currentData = currentData;

    this.editMode ? this.form.setValue(currentData) : this.form.reset();
  }

  onFileChange(e): void {
    e.preventDefault();
    const reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('files', file);
      this.upload.uploadFile(formData).subscribe(res => {
        if (res.length) {
          console.log(res[0].id);
          this.form.patchValue({
            [e.target.id]: res?.[0].id
          });
        }
        this.currentData = { ...this.currentData, [e.target.id]: file };
        console.log({form: this.form});

      });
      this.cd.markForCheck();

    }

  }

  formatTime(times: Date[]): Record<string, string> {
    return times.reduce((acc, time: Date, index) => {
      const [_date, hr] = time?.toString().split('T');
      const [gqlTime, _idk] = hr ? hr?.split('-') : '';
      return {...acc, [index === 0 ? 'start' : 'end']: gqlTime};
    }, {});
  }

  createEntry(): void{
    const { value } = this.form;
    const date = value.date ? new Date(value?.date || '').toISOString() : '_drop';
    const time = (value.end || value.start) ? this.formatTime([value?.start, value?.end]) : { drop: '_drop' };
    let data = { ...value, date, id: this.id, ...time };
    if (data.date === '_drop' || data.time === '_drop') {
      const { date, time, ...rest } = data;
      data = rest;
    } else {
      data = data;
    }

    const edit = this.editMode;

    edit
      ? this.api
          .update(this.collection, this.id, data)
          .toPromise()
          .then((success) => this.onSuccess(success))
          .catch((err) => this.onError(err))
      : this.api
          .create(this.collection, data)
          .toPromise()
          .then((success) => this.onSuccess(success))
          .catch((err) => this.onError(err));
  }

  async onError(err): Promise<any> {
    const toast = await this.toast.create({
      message: err.message,
      color: 'danger',
    });
    await toast.present();
  }

  async onSuccess(_success): Promise<any> {
    const toast = await this.toast.create({
      message: `Entry Successfully ${this.editMode ? 'Updated' : 'Created'}`,
      color: 'success',
    });
    await toast.present();
    this.clearInput = true;
    this.mc.dismiss().then(() => {
      this.clearInput = false;
      toast.dismiss();
    });
  }

  closeDialog(): void {
    this.mc.dismiss();
  }

  camelCase(string): string {
    return camelCase(string);
  }

  clearForm(): void{ }

  clickUpload(e): void {
    document.getElementById(e.target.id).click();
  }
}
