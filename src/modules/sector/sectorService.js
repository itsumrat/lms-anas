import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class SectorService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation {
          update_sector(where: {id: {_eq: ${id}}}, _set: {name: "${data.name}"}) {
            affected_rows
          }
        }
      `,
    });

    return response.data.insert_sector;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation {
          delete_sector(where: {id: {_eq: ${ids}}}) {
            affected_rows
          }
        }
      `,
    });

    return response.data.delete_sector;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation {
          insert_sector(objects: {name: "${data.name}"}) {
            affected_rows
          }
        }
      `,
    });

    return response.data.insert_sector;
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

    return response.data.SectorImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          sector(where: {id: {_eq: ${id}}}) {
            name
            updatedAt
            createdAt
            id
          }
        }
      `,
    });

    return response.data.sector[0];
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
          sector( ${limit != 0 ? `limit:${limit},` : ''} ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id:${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
        },
        name:
        ${filter.name ? `{_like:"%${filter.name}%"}` : '{}'}
        
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
              name
              updatedAt
              createdAt
              id
            }
          }
        `,
      });

    return response.data.sector;
  }

  static async listAutocomplete(query, limit, id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        sector(where: {name: {_like: "%${query}%"}}) {
          id
          name
        }
      }      
      `,
    });

    return response.data.sector;
  }

  static async listSelect(levelId) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        sector
          ${
            levelId
              ? `(where: {level_sectors: {id_level: {_eq: ${levelId}}}})`
              : ''
          } {
          name
          id
        }
      }
      `,
    });
    return response.data.sector;
  }
}
