import { environment } from '../../environments/environment';
import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { merge as _merge } from 'lodash';
import { cloneDeep } from '@apollo/client/utilities';

// <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const uri = `${environment.apiUrl}/graphql`;
  const cache = new InMemoryCache();

  return {
    link: httpLink.create({ uri, method: 'POST' }),
    cache
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
