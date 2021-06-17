import { environment } from './../../../environments/environment';
import { startCase, replace, omit, camelCase } from 'lodash';
import { gql } from 'graphql-tag';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { DocumentNode } from 'graphql';
import pluralize from 'pluralize';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  uploadUrl = `${environment.apiUrl}/upload`;
  constructor(private apollo: Apollo) {}

  private graphqlJSON(array) {
    return replace(JSON.stringify(array), /"([^"]+)":/g, '$1:')
      .replace(/\uFFFF/g, '\\"')
      .toLowerCase();
  }

  getData(
    query: DocumentNode,
    setData: any,
    collection?: string
  ): Subscription {
    return this.apollo
      .watchQuery<any>({ query })
      .valueChanges.subscribe((result) => {
        console.log({ result, collection });
        return setData(result.data[camelCase(collection)]);
      });
  }

  getFields(collectionType) {
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
      .valueChanges.toPromise();
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

    console.log(`
      mutation ${startCase(collection).split(' ').join('')} {
        update${startCase(entry).split(' ').join('')}(input: {
         ${whereClause}
        data: ${payload}
      }){
        ${entry}{
          id
        }
      }
      }
      `);

    return this.apollo.mutate({
      mutation: gql`
      mutation ${startCase(collection).split(' ').join('')} {
        update${startCase(entry).split(' ').join('')}(input: {
         ${whereClause}
        data: ${payload}
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
