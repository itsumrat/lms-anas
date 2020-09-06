import gql from 'graphql-tag';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import axios from 'axios';
import { getStore } from 'modules/store';
import config from 'config';

export default class LiveService {
  static async getUsername(id) {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
          query MyQuery {
            getname(where: { user_id: { _eq: "${id}" } }) {
              register_data
              role
            }
          }
        `,
      });

    let responsejson = response.data.getname[0];

    return responsejson;
  }
}
