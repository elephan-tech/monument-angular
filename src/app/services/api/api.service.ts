import { environment } from './../../../environments/environment';
import { startCase, replace, omit, camelCase } from 'lodash';
import { gql } from 'graphql-tag';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { DocumentNode } from 'graphql';
import pluralize from 'pluralize';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public CollectionData: BehaviorSubject<any> = new BehaviorSubject([]);
  public Fields: BehaviorSubject<any> = new BehaviorSubject([]);
  uploadUrl = `${environment.apiUrl}/upload`;
  constructor(private apollo: Apollo) {}

  private graphqlJSON(array) {
    return replace(JSON.stringify(array), /"([^"]+)":/g, '$1:').replace(
      /\uFFFF/g,
      '\\"'
    );
  }

  getData(query: DocumentNode, collection?: string) {
    this.apollo.watchQuery<any>({ query }).valueChanges.subscribe((result) => {
      const data = result?.data[camelCase(collection)];
      console.log({ data });
      this.CollectionData.next(data);
    });
  }

  getFields(collectionType: string): Promise<any> | Subscription {
    const collection = startCase(collectionType).split(' ').join('');

    return this.apollo
      .watchQuery<any>({
        query: gql`
        {
          __type(name: "${collection}") {
            fields {
              name
              description
              type {
                name
              }
            }
          }
        }
      `,
      })
      .valueChanges.pipe()
      .toPromise()
      .then((obs) => this.setFields(obs))
      .catch((err) => console.log(err));
  }

  private setFields(data) {
    console.log({ data });
    this.Fields.next(data?.data['__type']?.fields);
    return this.Fields.getValue();
  }

  delete(collection: string, id: string) {
    const entry = pluralize.singular(collection);
    const generateMutation = () => {
      return gql`
          mutation ${startCase(collection)} {
            delete${startCase(entry)}(input: {
              where: {
                id: ${id}
              }
            }){
            ${entry}{
              id
            }
          }
        }
      `;
    };
    return this.apollo
      .mutate({
        mutation: generateMutation(),
        optimisticResponse: {},
      })
      .subscribe();
  }

  create(collectionType: string, data: object) {
    const entry = pluralize.singular(collectionType);
    const collection = startCase(entry).split(' ').join('');
    console.log({ data });
    const payload = this.graphqlJSON(omit(data, ['id']));

    return this.apollo.mutate({
      mutation: gql`
        mutation ${collection} {
          create${collection}(input: {
          data: ${payload}
        }){
          ${camelCase(entry)}{
            id
          }
        }
        }
        `,
      optimisticResponse: {},
    });
  }

  update(collection: string, id: any, data: object) {
    const entry = pluralize.singular(collection);
    const payload = this.graphqlJSON(omit(data, ['id']));
    const whereClause =
      collection === 'emergencyMessage'
        ? ''
        : `where: {
      id: ${id}
      }`;

    return this.apollo.mutate({
      mutation: gql`
      mutation ${startCase(collection).split(' ').join('')} {
        update${startCase(entry).split(' ').join('')}(input: {
         ${whereClause}
        data: ${
          collection === 'emergencyMessage' ? payload.toLowerCase() : payload
        }
      }){
        ${entry}{
          id
        }
      }
      }
      `,
      optimisticResponse: {},
    });
  }
}
