import { ApiService } from './../../services/api/api.service';
import { AddcareermodalComponent } from './../../dialogs/careers/addcareermodal/addcareermodal.component';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Component, ComponentRef, OnInit } from '@angular/core';
import { join } from 'node:path';
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
  collection: string;
  collectionData: any;
  loading: boolean = true;

  constructor(private modal: ModalController, private route: ActivatedRoute, private api: ApiService) {
    this.collectionType = (this.route.url as any).value.pop().path;
  }

  ngOnInit(): void {
    this.collectionData = this.api.getData(queries[this.collectionType])
    console.log({collectionData: this.collectionData})
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
