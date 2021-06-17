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
  constructor(private apollo: Apollo) {}

  private graphqlJSON(array) {
    return replace(JSON.stringify(array), /"([^"]+)":/g, '$1:').replace(
      /\uFFFF/g,
      '\\"'
    );
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

  create(collection: string, data: object) {
    const entry = pluralize.singular(collection);
    const thing = startCase(entry).split(' ').join('');
    const payload = this.graphqlJSON(omit(data, ['id']));

    return this.apollo
      .mutate({
        mutation: gql`
        mutation ${thing} {
          create${thing}(input: {
          data: ${payload}
        }){
          ${camelCase(entry)}{
            id
          }
        }
        }
        `,
        optimisticResponse: {},
      })
      .subscribe((val) => val);
  }

  update(collection: string, id: any, data: object) {
    const entry = pluralize.singular(collection);
    const payload = this.graphqlJSON(omit(data, ['id']));

    return this.apollo
      .mutate({
        mutation: gql`
        mutation ${startCase(collection)} {
          update${startCase(entry)}(input: {
            where: {
              id: ${id}
              }
          data: ${payload}
        }){
          ${entry}{
            id
          }
        }
        }
        `,
        optimisticResponse: {},
      })
      .subscribe((val) => val);
  }
}
