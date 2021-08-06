import { environment } from './../../../environments/environment';
import { UploadService } from './../../services/upload/upload.service';
import { isEmpty } from 'lodash';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DocumentNode } from 'graphql';
import { startCase } from 'lodash';
import { Subscription, BehaviorSubject } from 'rxjs';
import { CollectionModalComponent } from 'src/app/dialogs/collections/collection-modal/collection-modal.component';
import useQuery from '../../api/queries';
import { Careers } from './../../models/careers';
import { Events } from './../../models/events';
import { Fields } from './../../models/Fields';
import { Media } from './../../models/media';
import { ApiService } from './../../services/api/api.service';

type CollectionType =
  'events' |
  'careers' |
  'knowledge-center' |
  'announcements' |
  'emergencyMessage'|
  undefined;

type UpdateResponse = {
  data: {
    updateEvent: {
      event: {
        id: string,
        name: string,
        updated_at: string,
        display: boolean
     }
   }
 }
};

type StrapiTypes = 'DateTime' | 'Boolean' | 'String' | 'UploadFile' | 'ID';

type CollectionTypeData = {
  value: string | boolean | object | any;
  type: StrapiTypes
};

interface CollectionData {
  data: CollectionTypeData;
  fields: Fields;
}

@Component({
  selector: 'app-collection-crud',
  templateUrl: './collection-crud.component.html',
  styleUrls: ['./collection-crud.component.scss'],
})
export class CollectionCrudComponent implements OnInit, OnDestroy {
  collectionType: CollectionType;
  collectionData: any;
  loading = true;
  title: string;
  fields: any;
  collectionForm: FormGroup;
  dataObs: Subscription;
  deleteSubscription: Subscription;
  editMode = false;
  editIcon = 'create-outline';
  files: any;
  query: DocumentNode;

  fieldTypes = {
    boolean: 'toggle',
    string: 'text',
    number: 'number',
    object: 'file',
    undefined: 'text',
  };

  specialFields = ['url', 'image', 'attachment', 'display'];
  data: any;
  omitFields = ['published_at', 'created_at', 'updated_at', 'slug'];
  collectionSub = new BehaviorSubject<any>([]);
  uploadUrl = 'http://localhost:1337';



  constructor(
    private modal: ModalController,
    private route: ActivatedRoute,
    private api: ApiService,
    private fb: FormBuilder,
    public alertController: AlertController,
    public upload: UploadService
  ) {
    this.collectionType = (this.route.url as any).value.pop().path as CollectionType;
  }

  ngOnInit(): void {
    this.title = startCase(this.collectionType);
    this.query = useQuery(this.collectionType);
    this.uploadUrl = environment.apiUrl;
    this.getData();
  }

  ngOnDestroy(): void {
    // this.api.getData(this.collectionType).unsubscribe();
  }

  inputTypes(type): string {
    return {
      DateTime: 'date',
      Boolean: 'checkbox',
      String: 'text',
      ID: 'text',
      UploadFile: 'file',
      Date: 'date',
      Time: 'time'
    }[type];
  }

  public formatValue(value: any, type: StrapiTypes): string | number | any {
    return {
      DateTime: value ? new Date(value).toLocaleDateString('en-us') : new Date().toLocaleDateString(),
      Boolean: value ? '🟢' : '🔴',
      String: value || 'N/A',
      ID: value,
      UploadFile: value?.url ? '' : 'N/A',
      Date: value ? new Date(value).toLocaleDateString('en-us') : new Date().toLocaleDateString(),
      Time:  value
    }[type];
  }

  public async getData(): Promise<void>{
    this.api.getData(this.collectionType).subscribe((result: CollectionData) => {
      if (!isEmpty(result)) {
        this.collectionData = result.data;
        this.fields = result.fields.filter(field => !this.omitFields.includes(field.name));
      }
    });
    this.upload.getFiles().subscribe(res => {
      this.files = res;
    });

  }

  refresh(): void {
    this.api.refresh(this.collectionType);
  }

  generateForm(fields: Fields): FormGroup {
    const formGroup = this.fb.group({});
    fields.forEach((item) => {
      formGroup.addControl(item.name, new FormControl(''));
    });

    return formGroup;
  }


  public async editEntry(e): Promise<any>{
    e.preventDefault();

    const { id } = e.target;
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
          id
        },
      });
    return await modal.present();


  }

  async delete(e): Promise<any> {
    e.preventDefault();

    const { id } = e.currentTarget;
    const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        subHeader: 'Deleting',
        message: `Are you sure you want to delete this ${this.collectionType} entry?`,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => { },
          },
          {
            text: 'Delete',
            role: 'delete',
            cssClass: 'danger',
            handler: () => {
              this.api.delete(this.collectionType, id).toPromise().then(success => {
                this.refresh();
              });
            },
          },
        ],
      });

    await alert.present();

    await alert.onDidDismiss();

  }

  async onToggle(e): Promise<any> {
    const { id, checked } = e.currentTarget;

    this.api.update(this.collectionType, id, {
      display: checked
    }).toPromise().then((res: UpdateResponse) => {
      this.api.refresh(this.collectionType);
    });
  }

  public async addNew(): Promise<any> {
    const form = this.generateForm(this.fields);

    const modal = await this.modal.create({
      component: CollectionModalComponent,
      cssClass: 'cms-form-modal',
      componentProps: {
        data: this.collectionData,
        fields: this.fields,
        form,
        collection: this.collectionType,
      },
    });
    return await modal.present().then(() =>  this.refresh());
  }


}
