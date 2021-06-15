import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { gql } from 'graphql-tag';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  getData(query: any): Subscription {
    return this.apollo.watchQuery<any>({query}).valueChanges.subscribe(result => {
      console.log({result})
      return result
    })
  }

}
