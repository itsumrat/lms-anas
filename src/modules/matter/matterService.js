import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import { getLanguageCode } from 'i18n';

export default class MatterService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        update_matter(where: {id: {_eq: ${id}}}, _set: {name: "${data.name}"}) {
          affected_rows
        }
      }
      
      `,
    });

    return response.data.update_matter;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_matter(where: {id: {_eq: ${ids}}}) {
          affected_rows
        }
      }
      
      `,
    });

    return response.data.delete_matter;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        insert_matter(objects: {name: "${data.name.toLowerCase()}"}) {
          affected_rows
        }
     }    
      `,
    });

    return response.data.insert_matter;
  }

  static async import(file) {}

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        matter(where: {id: {_eq: ${id}}}) {
          id
          name
          createdAt
          updatedAt
        }
      }
      
      `,
    });

    return response.data.matter[0];
  }

  static async list(filter, orderBy, limit, offset) {
    if (
      filter &&
      filter.createdAt &&
      filter.createdAtRange
    ) {
      delete filter.createdAt;
    }
    if (filter == undefined) filter = {};

    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
        query MyQuery {
          matter( ${limit != 0 ? `limit:${limit},` : ''} ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id:${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
        },
        name:
        ${filter.name ? `{_eq: "${filter.name}"}` : '{}'}
        
        ${
          filter.createdAt
            ? `,createdAt:{_eq:"${filter.createdAt.format()}"}`
            : ''
        },
      
        updatedAt:
      ${
        filter.updatedAt
          ? `{_eq:"${filter.updatedAt.format()}"}`
          : '{}'
      }
      
      ${
        filter.createdAtRange
          ? `,createdAt:{_gte: "${filter.createdAtRange[0].format()}", _lte: "${filter.createdAtRange[1].format()}"}`
          : ''
      }
        }) {
            id
            name
            createdAt
            updatedAt
          }
        }
        `,
      });

    return response.data.matter;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query booking_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          bookingAutocomplete(
            query: $query
            limit: $limit
          ) {
            id
            label
          }
        }
      `,

      variables: {
        query,
        limit,
      },
    });

    return response.data.MatterAutocomplete;
  }

  static async listSelect(limit) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        matter(where: {}, limit: ${limit}) {
          id
          name
        }
      }
      `,
    });
    return response.data.matter;

    // const response = await graphqlClient.config().query({
    //   query: gql`
    //   query MyQuery {
    //     matter(where: {}, limit: ${limit}) {
    //       id
    //       name_${getLanguageCode?getLanguageCode:'fr'}

    //     }
    //   }

    //   `,
    // });

    //     var data= response.data.matter;
    // var new_data = data.map(item=>({
    //   name:item[`name_${getLanguageCode?getLanguageCode:'fr'}`],
    //   id:item.id
    // }))
    // return new_data;
  }
}
