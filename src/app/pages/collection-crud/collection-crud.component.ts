import { ApiService } from './../../services/api/api.service';
import { AddcareermodalComponent } from './../../dialogs/careers/addcareermodal/addcareermodal.component';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Component, ComponentRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import queries from '../../api/queries'

@Component({
  selector: 'app-collection-crud',
  templateUrl: './collection-crud.component.html',
  styleUrls: ['./collection-crud.component.scss'],
})
export class CollectionCrudComponent implements OnInit {
  collectionType: string;
  rows: any;
  columns: any;
  collection: Subscription;
  collectionData: any;
  loading: boolean = true;

  constructor(private modal: ModalController, private route: ActivatedRoute, private api: ApiService) {
    this.collectionType = (this.route.url as any).value.pop().path;
  }

  ngOnInit(): void {
    const collectionType = this.collectionType;
    console.log({collectionType})
    const query = queries[collectionType];
    console.log(query, collectionType)
    const setData = (data) => {
      console.log({data})
      this.collectionData = data;
      this.columns = this.generateColumns(data);

    };
    this.api.getData(query, setData, collectionType);
  }

  public generateColumns(data){
    console.log({data})
    return typeof data === 'object' ? this.mapCols(data) : data.map(item => this.mapCols(item))[0]
  }

  mapCols(item) {
    return Object.keys(item).filter(key=> key!== '__typename').reduce((a, b) => [...a, { name: b }], [])
  }




  public async addNew() {
    const collectionModals = {
      careers: AddcareermodalComponent,
    };
    const modal = await this.modal.create({
      component: collectionModals[this.collectionType],
      cssClass: 'cms-form-modal',
    });
    return await modal.present();
  }
}
