import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class MatterService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation($data: cycle_set_input!) {
        update_cycle(where: {id: {_eq: ${id}}}, _set: $data) {
          affected_rows
        }
      }
      
      `,
      variables: {
        data: { ...data },
      },
    });

    return response.data.update_cycle;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation {
          delete_cycle(where: {id: {_eq: ${ids}}}) {
            affected_rows
          }
        }
      `,
    });

    return response.data.delete_cycle;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        insert_cycle(objects: {name: "${data.name.toLowerCase()}"}) {
          affected_rows
        }
     }    
      `,
    });

    return response.data.insert_cycle;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation booking_IMPORT(
          $data: bookingInput!
          $importHash: String!
        ) {
          bookingImport(
            data: $data
            importHash: $importHash
          )
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.MatterImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          cycle(where: { id: { _eq: ${id} } }) {
            id
            name
            created_at
            updated_at
          }
        }
      `,
    });

    return response.data.cycle[0];
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
          cycle( ${limit != 0 ? `limit:${limit},` : ''} ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id:${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
        },
          name:
          ${
            filter.name
              ? `{_like:"%${filter.name.label}%"}`
              : '{}'
          }       
        ${
          filter.createdAt
            ? `,created_at:{_eq:"${filter.createdAt.format()}"}`
            : ''
        },
      
        updated_at:
      ${
        filter.updatedAt
          ? `{_eq:"${filter.updatedAt.format()}"}`
          : '{}'
      }
      
      ${
        filter.createdAtRange
          ? `,created_at:{_gte: "${filter.createdAtRange[0].format()}", _lte: "${filter.createdAtRange[1].format()}"}`
          : ''
      }
      
    }) {
            id
            name
            created_at
            updated_at
          }
        }
        `,
      });

    return response.data.cycle;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          cycle(where: {name: {_like: "%${query}%"}}, limit: ${limit}) {
            name
            id
          }
        }
      `,
    });

    return response.data.cycle;
  }

  static async listSelect(limit) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        cycle(where: {}, limit: ${limit}) {
          name
          id
        }
      }
      `,
    });
    return response.data.cycle;
  }
}
