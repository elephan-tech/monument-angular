import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { camelCase, startCase, filter } from 'lodash';
import pluralize from 'pluralize';
import { Observable } from 'rxjs';
import { ApiService } from './../../../services/api/api.service';

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
  fieldsFoo: Promise<any>;
  fieldTypes = {
    UploadFile: 'file',
    String: 'text',
    Boolean: 'radio',
    DateTime: 'date'
  };
  currentData: any;


  constructor(
    private api: ApiService,
    private mc: ModalController,
    private toast: ToastController
  ) { }

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

  getEntries(item) {
    return Object.entries(item).reduce((acc, [name, value]) => {
      return [...acc, {name, value}];
    }, []);
  }

  generateValues(item) {
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

    const [currentDataValues] = this.data.reduce((acc, item) => {
      const values = this.generateValues(item);
      return [...acc, values];
    }, []);

    this.currentData = currentDataValues;

    this.editMode ? this.form.setValue(currentDataValues) : this.form.reset();
  }

  createEntry() {

    const { value } = this.form;

    const date = new Date(value?.date || '').toISOString();

    const data = { ...value, date , id: this.id};
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
          .catch((err) => console.error(err));
  }

  async onError(err) {
    const toast = await this.toast.create({
      message: err.message,
      color: 'danger',
    });
    await toast.present();
  }

  async onSuccess(_success) {
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

  closeDialog() {
    this.mc.dismiss();
  }

  camelCase(string) {
    return camelCase(string);
  }

  clearForm() {}
}
