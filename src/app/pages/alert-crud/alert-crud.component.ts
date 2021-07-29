import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CollectionData } from 'src/app/models/strapi';
import { ApiService } from 'src/app/services/api/api.service';
import { UpdateResponse } from '../../models/UpdateResponse';
import useQuery from '../../api/queries';
import { environment } from 'src/environments/environment';

type TAlertData = {emergencyMessage: any, __type: any};

@Component({
  selector: 'app-alert-crud',
  templateUrl: './alert-crud.component.html',
  styleUrls: ['./alert-crud.component.scss']
})
export class AlertCrudComponent implements OnInit {
  alertData: any;
  alertFields: any;
  alertObserver = new BehaviorSubject({});
  omitFields = ['id', 'display', 'created_at', 'updated_at', 'name'];

  disableAlert = true;
  alertForm = new FormGroup({
    headline: new FormControl(''),
    details: new FormControl(''),
    link: new FormControl(''),
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

  getEntries(item) {
    return Object.entries(item).reduce((acc, [name, value]) => {
      return [...acc, {name, value}];
    }, []);
  }

  generateValues(fields, item) {
    const formFields = fields.reduce((acc, field) => [...acc, field.name], []);
    return this.getEntries(item).reduce((acc, entry) => {
      const returnValue = formFields.includes(entry.name) ? { [entry.name]: this.getValue(entry.value) } : {};
      return {...acc, ...returnValue};
    }, {});
  }

  private getData(): void{
    const watchQuery = this.apollo.watchQuery({
      query: useQuery('emergencyMessage'),
      pollInterval: environment.production
      // production polls every 24 hrs
      ? 1000 * 60 * 60 * 24
      // development polls every 2 seconds
      : 2000,
    });

    watchQuery.valueChanges.subscribe(({ data }) => {
      const { id, name, __typename, display, ...formValues } = (data as TAlertData).emergencyMessage;
      this.alertForm.setValue(formValues);
      const emergencyData = this.api.formatData('emergencyMessage', data);
      this.alertObserver.next(emergencyData);
    });

    this.alertObserver.subscribe((obs: any) => {
      this.alertData = obs.data;
      this.alertFields = obs?.fields?.filter((field: { name: string, value: string | boolean | Array<any> }) => !this.omitFields.includes(field.name));
    });
  }
  public alertSubmit() {
    const data = this.alertForm.value;
    this.api
      .update('emergencyMessage', 1, data)
      .toPromise()
      .then()
      .catch((err) => console.error({ err }));
  }

  async onToggle(e) {
    const { checked } = e.currentTarget;

    this.api.update('emergencyMessage', 1, {
      display: checked
    }).toPromise().then(success => {
      this.api.refresh('emergencyMessage');
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

  public formatValue(value: any, type: any) {
    return {
      DateTime: value ? new Date(value).toLocaleDateString('en-us') : new Date().toLocaleDateString(),
      Boolean: value ? '🟢' : '🔴',
      String: value || 'N/A',
      ID: value,
      UploadFile: value?.length ? value?.name : 'N/A'
    }[type];
  }
}
