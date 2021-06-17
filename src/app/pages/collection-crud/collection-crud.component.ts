import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { dropWhile, isArray, startCase, camelCase } from 'lodash';
import { CollectionModalComponent } from 'src/app/dialogs/collections/collection-modal/collection-modal.component';
import queries from '../../api/queries';
import { ApiService } from './../../services/api/api.service';

type TypeType = boolean | string | object | Date | undefined;

type CollectionData = {
  [key: string]: TypeType | TypeType[];
};
@Component({
  selector: 'app-collection-crud',
  templateUrl: './collection-crud.component.html',
  styleUrls: ['./collection-crud.component.scss'],
})
export class CollectionCrudComponent implements OnInit {
  collectionType: string;
  collectionData: any;
  loading: boolean = true;
  title: string;
  fields: CollectionData;
  collectionForm: FormGroup;
  deleteSubscription: Subscription;
  editMode = false;
  fieldTypes = {
    boolean: 'toggle',
    string: 'text',
    number: 'number',
    object: 'file',
    undefined: 'text',
  };
  specialFields = ['Link', 'Image', 'Display'];

  constructor(
    private modal: ModalController,
    private route: ActivatedRoute,
    private api: ApiService,
    private fb: FormBuilder
  ) {
    this.collectionType = (this.route.url as any).value.pop().path;
  }

  ngOnInit(): void {
    this.title = startCase(this.collectionType);
    const query = queries[this.collectionType];
    console.log({ query });
    const setData = (data) => {
      console.log({ data });
      this.collectionData = data;
      this.fields = this.generateKvp(data);
      console.log('fields', this.fields);
      this.collectionForm = this.generateForm(this.fields);
    };
    this.api.getData(query, setData, this.collectionType);
  }

  public generateForm(data): FormGroup {
    const fields = data.reduce((acc, field) => {
      return { ...acc, group: this.generateFormGroup(field) };
    }, {});

    return fields.group;
  }

  generateFormGroup(field): FormGroup | FormControl {
    const formGroup = this.fb.group({});
    field.forEach(({ key, value }) => {
      const dv = ['Date', 'Display'];
      const defaultValues = {
        Display: false,
        Date: new Date(),
        default: '',
      };
      formGroup.addControl(
        camelCase(key),
        new FormControl(
          this.editMode
            ? value
            : defaultValues[dv.includes(key) ? key : 'default']
        )
      );
    });
    return formGroup;
  }

  public generateKvp(data) {
    return !isArray(data)
      ? this.mapCols(data)
      : data.map((item) => this.mapCols(item));
  }

  mapCols(item) {
    const kvp = Object.entries(item).map((entry) => {
      const [key, val] = entry;
      const value = () => {
        if (key === 'date')
          return (
            val &&
            new Date(<Date>val).toLocaleDateString('en-US', {
              weekday: 'long',
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })
          );
        if (val === null) return 'undefined';
        return val;
      };
      return {
        key: startCase(key),
        value: value(),
        type: this.fieldTypes[typeof value()],
      };
    });
    const droppedKeys = ['Typename'];
    return dropWhile(kvp, ({ key }) => droppedKeys.includes(key));
  }

  public async editEntry() {
    this.editMode = true;
    const form = this.generateForm(this.fields);
    const modal = await this.modal.create({
      component: CollectionModalComponent,
      cssClass: 'cms-form-modal',
      componentProps: {
        data: this.collectionData,
        fields: this.fields,
        form,
        collection: this.collectionType,
        editMode: this.editMode,
      },
    });
    return await modal.present();
  }

  public delete(e) {
    this.deleteSubscription = this.api.delete(
      this.collectionType,
      e.currentTarget.id
    );
  }

  public async addNew() {
    const modal = await this.modal.create({
      component: CollectionModalComponent,
      cssClass: 'cms-form-modal',
      componentProps: {
        data: this.collectionData,
        fields: this.fields,
        form: this.collectionForm,
        collection: this.collectionType,
      },
    });
    return await modal.present();
  }
}
