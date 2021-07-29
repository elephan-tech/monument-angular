import { CollectionData, Collection, CollectionType } from './../../models/strapi';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { gql } from 'graphql-tag';
import { camelCase, omit, replace, startCase, reduce, uniqWith, isEqual } from 'lodash';
import pluralize from 'pluralize';
import { BehaviorSubject } from 'rxjs';
import { isEmpty } from 'lodash';
import useQuery from '../../api/queries';
import { environment } from './../../../environments/environment';
import { GenericObject } from './../../models/generic';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public CollectionData: BehaviorSubject<any> = new BehaviorSubject([]);
  public Fields: BehaviorSubject<any> = new BehaviorSubject([]);
  public $data: GenericObject[];
  public $query: DocumentNode;
  uploadUrl = `${environment.apiUrl}/upload`;
  public loading = new BehaviorSubject<boolean>(false);
  constructor(private apollo: Apollo) {}

  private graphqlJSON(array) {
    return replace(JSON.stringify(array), /"([^"]+)":/g, '$1:').replace(
      /\uFFFF/g,
      '\\"'
    );
  }

  private mergeDataType(data, fields) {
    const DATA = data.length ? data : [data];
    return DATA.reduce((dataAcc, item) => {


      const collectionData = fields.reduce((acc, field) => {
        return {
          ...acc, [field.name]: {
            value: item?.[field.name],
            type: field.type
          }
        };
      }, {});

      return [...dataAcc, collectionData];
    }, []);

  }
  public formatData(type: string, data: any): Collection {
    if (!isEmpty(data)) {

      const fields = data?.__type.fields.reduce((acc, field) => [...acc, {
          name: field.name,
          type: field.type.name || field.type.ofType.name
      }], []);

      const withType = this.mergeDataType(data[camelCase(type)], fields);

      return {data: uniqWith(withType, isEqual), fields};

    }
    return {};
  }


  getData(collectionType?: CollectionType) {

    const query: DocumentNode = useQuery(collectionType);

    const watchQuery = this.apollo.watchQuery<any>({
      query,
      pollInterval: environment.production
        // production polls every 24 hrs
        ? 1000 * 60 * 60 * 24
        // development polls every 2 seconds
        : 2000,
    });


    watchQuery.valueChanges.subscribe(({ data }) => {
      const collectionData = this.formatData(collectionType, data);
      !isEmpty(data) ? this.CollectionData.next(collectionData) : this.CollectionData.next([]);
    });

    return this.CollectionData;
  }

  refresh(collectionType: CollectionType) {
    const query: DocumentNode = useQuery(collectionType);

    const refresh = this.apollo.watchQuery<any>({
      query
    }).refetch();

    return refresh;
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
      });
  }

  create(collectionType: string, data: object) {
    const entry = pluralize.singular(collectionType);
    const collection = startCase(entry).split(' ').join('');
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
        ${collection === 'emergencyMessage' ? entry : entry.toLowerCase()}{
          id
        name
        updated_at
        display
        }
      }
      }
      `,
      optimisticResponse: {},
    });
  }


}
