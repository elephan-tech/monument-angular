import { ApiService } from './../../../services/api/api.service';
import { startCase, camelCase } from 'lodash';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  @Input() form: any;
  @Input() collection: string;
  @Input() editMode: boolean;
  collectionObs: Observable<any>;
  specialFields = ['Id', 'Date', 'Display'];
  entry: any;
  promise: Promise<any>;
  clearInput = false;

  constructor(
    private api: ApiService,
    private mc: ModalController,
    private toast: ToastController
  ) {}

  ngOnInit(): void {
    this.fields = this.fields[0];
    this.entry = startCase(pluralize.singular(this.collection));
  }

  createEntry() {
    const data = this.form.value;
    this.editMode
      ? this.api.update(this.collection, this.fields[0].value, data)
      : this.api.create(this.collection, data);
  }

  closeDialog() {
    this.mc.dismiss();
  }

  camelCase(string) {
    return camelCase(string);
  }

  clearForm() {}
}
