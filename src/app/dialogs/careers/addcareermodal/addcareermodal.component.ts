import { ModalController } from '@ionic/angular';
import { gql } from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcareermodal',
  templateUrl: './addcareermodal.component.html',
  styleUrls: ['./addcareermodal.component.scss'],
})
export class AddcareermodalComponent implements OnInit {
  categoryData: Subscription;
  careerCategories: any;
  career: any;
  constructor(
    private apollo: Apollo,
    private formBuilder: FormBuilder,
    private mc: ModalController
  ) {
    this.career = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      link: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.categoryData = this.apollo
      .watchQuery<any>({
        query: gql`
          query Categories {
            categories {
              name
            }
          }
        `,
      })
      .valueChanges.subscribe((result) => {
        console.log(result);
        this.careerCategories = result.data.categories;
      });
  }

  createEntry() {
    const vals = this.career.value;
    console.log({ vals });
    this.apollo.watchQuery<any>({
      query: gql`
      mutation{
        createJobPosting(input:{
          data:{
            title: "${this.career.value.title}"
            description: "${this.career.value.description}"
            link: "${this.career.value.link}"
            category: 3
          }
        }){
          __typename
        }
      }
      `,
    });
  }

  closeDialog() {
    this.mc.dismiss();
  }

  clearForm() {}
}
