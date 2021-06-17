import { ApiService } from './../../../services/api/api.service';
import { startCase, camelCase } from 'lodash';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Apollo, gql } from 'apollo-angular';
import { Subscription, Observable } from 'rxjs';
import pluralize from 'pluralize';

@Component({
  selector: 'app-collection-modal',
  templateUrl: './collection-modal.component.html',
  styleUrls: ['./collection-modal.component.scss'],
})
export class CollectionModalComponent implements OnInit {
  @Input() data: any;
  @Input() fields: any;
  @Input() form: FormGroup;
  @Input() collection: string;
  @Input() editMode: boolean;
  collectionObs: Observable<any>;
  specialFields = ['Id', 'Date', 'Display'];
  entry: any;
  promise: Promise<any>;
  clearInput = false;
  fieldsFoo: Promise<any>;

  constructor(
    private api: ApiService,
    private mc: ModalController,
    private toast: ToastController
  ) {}

  ngOnInit(): void {
    console.log({ editMode: this.editMode });
    this.clearInput = false;
    this.fields = this.fields[0];
    this.entry = startCase(pluralize.singular(this.collection));
    // this.fieldsFoo = this.api
    //   .getFields(this.collection)
    //   .then((res) => console.log({ res }))
    //   .catch((err) => console.warn({ err }));
  }

  createEntry() {
    const { value } = this.form;
    const data = { ...value, date: new Date(value?.date || '') };
    const edit = this.editMode;
    console.log({ edit });
    edit
      ? this.api
          .update(this.collection, this.fields[0].value, data)
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
    console.log({ err });
    const toast = await this.toast.create({
      message: err,
      color: 'danger',
    });
    await toast.present();
  }

  async onSuccess(success) {
    console.log({ success });
    const toast = await this.toast.create({
      message: 'Entry created',
      color: 'success',
    });
    await toast.present();
    this.clearInput = true;
    this.mc.dismiss().then(() => (this.clearInput = false));
  }

  closeDialog() {
    this.mc.dismiss();
  }

  camelCase(string) {
    return camelCase(string);
  }

  clearForm() {}
}
