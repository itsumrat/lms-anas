import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class MatterService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        update_level(where: {id: {_eq: ${id}}}, _set: {name: "${data.name}", id_cycle: ${data.cycle}}) {
          affected_rows
        }
      }      
      `,
    });

    return response.data.update_level;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation {
          delete_level(where: {id: {_eq: ${ids}}}) {
            affected_rows
          }
        }
      `,
    });

    return response.data.delete_level;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        insert_level(objects: {name: "${data.name.toLowerCase()}", id_cycle: ${
        data.cycle
      }}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.insert_level;
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
          level(where: { id: { _eq: ${id} } }) {
            id
            name
            cycle {
              id
              name
            }
            createdAt
            updatedAt
          }
        }
      `,
    });

    return response.data.level[0];
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
          level( ${limit != 0 ? `limit:${limit},` : ''} ${
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
          },
            id_cycle:
            ${
              filter.id_cycle
                ? `{_eq: ${filter.id_cycle}}`
                : '{}'
            }
        
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
            cycle {
              id
              name
            }
            createdAt
            updatedAt
          }
        }
        `,
      });
    return response.data.level;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          level(where: {name: {_like: "%${query}%"}}, limit: ${limit}) {
            name
            cycle {
              id
              name
            }
            id
          }
        }
      `,
    });

    return response.data.level;
  }

  static async listSelect(cycleId) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        level(where: {id_cycle: {_eq:  ${
          cycleId ? cycleId : -1
        }}}) {
          name
          id
        }
      }
      `,
    });
    return response.data.level;
  }
}
