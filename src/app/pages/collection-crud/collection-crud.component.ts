import { DocumentNode } from 'graphql';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { dropWhile, isArray, startCase, camelCase, map } from 'lodash';
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
  dataObs: Subscription;
  deleteSubscription: Subscription;
  editMode = false;
  query: DocumentNode;
  alertForm = new FormGroup({
    Headline: new FormControl(''),
    Details: new FormControl(''),
    Link: new FormControl(''),
    Display: new FormControl(''),
  });
  alertData: CollectionData;
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
    private fb: FormBuilder,
    public alertController: AlertController
  ) {
    this.collectionType = (this.route.url as any).value.pop().path;
  }

  ngOnInit(): void {
    this.title = startCase(this.collectionType);
    this.query = queries[this.collectionType];
    this.generateFields();

    console.log(this.query, this.collectionType,  queries)
    this.collectionData = this.api.getData(this.query, this.collectionType)
    console.log({cd: this.collectionData, apiD: this.api.CollectionData})

    this.getData(this.query);
  }

  public async generateFields(){
    const f = await this.api.getFields(this.collectionType)
    console.log({f})
  }

  public  getData(query) {
    const setData = (data) => {
      console.log({ data });
      this.collectionData = data;
      this.fields = this.generateKvp(data);
      this.collectionForm =
        this.collectionType !== 'emergencyMessage' &&
        this.generateForm(this.fields);
    };

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
    console.log({ item });
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

  async delete(e) {
    console.log(e.currentTarget.id);
    const id = e.currentTarget.id;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: 'Deleting',
      message: `Are you sure you want to delete this ${this.collectionType} entry?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('cancel'),
        },
        {
          text: 'Delete',
          role: 'delete',
          cssClass: 'danger',
          handler: () => {
            this.api.delete(this.collectionType, id);
          },
        },
      ],
    });

    await alert.present();

    await alert.onDidDismiss();
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

  public alertSubmit() {
    const data = this.alertForm.value;
    this.api
      .update('emergencyMessage', 1, data)
      .toPromise()
      .then((r) => console.log({ r }))
      .catch((err) => console.error({ err }));
  }
}
