import { AddcareermodalComponent } from './../../dialogs/careers/addcareermodal/addcareermodal.component';
import { ModalController } from '@ionic/angular';
import { gql } from 'graphql-tag';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Component, ComponentRef, OnInit } from '@angular/core';
import { join } from 'node:path';

@Component({
  selector: 'app-collection-crud',
  templateUrl: './collection-crud.component.html',
  styleUrls: ['./collection-crud.component.scss'],
})
export class CollectionCrudComponent implements OnInit {
  collectionType: string = 'careers';
  rows: any;
  columns: any;
  collection: Subscription;
  collectionData: any;
  loading: boolean = true;

  constructor(private apollo: Apollo, private modal: ModalController) {}

  ngOnInit(): void {
    this.collection = this.apollo
      .watchQuery<any>({
        query: gql`
          query JobPosting {
            jobPostings {
              id
              title
              description
              category {
                name
              }
              link
              date_posted
              attachment {
                name
                url
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result) => {
        console.log({ result });
        this.collectionData = result.data.jobPostings;
        this.columns = this.collectionData.map((job) =>
          Object.keys(job)
            .filter((key) => key !== '__typename')
            .reduce((a, b) => [...a, { name: b }], [])
        )[0];
        this.rows = this.collectionData.reduce((acc, job) => {
          const cleanData = {
            ...job,
            category: job.category?.name,
            date_posted: job.date_posted,
            attachment: !!job.attachment?.length ? '✅' : '❌',
            actions: 'click',
          };
          return [...acc, cleanData];
        }, []);
        this.loading = result.loading;
      });
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
