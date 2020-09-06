import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class MatterService {
  static async update(id, data) {
    const response1 = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          level_sector(where: { id_level: { _eq: ${data.level} }, id_sector: { _eq: ${data.sector} } }) {
            id
          }
        }
      `,
    });
    var id_levelSector = response1.data.level_sector[0].id;

    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        update_element(where: {id: {_eq: ${id}}}, _set: {name: "${data.name}", id_matter: ${data.matter}, id_level_sector: ${id_levelSector}}) {
          affected_rows
        }
      }      
      `,
    });

    return response.data.update_element;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation {
          delete_element(where: {id: {_eq: ${ids}}}) {
            affected_rows
          }
        }
      `,
    });

    return response.data.delete_element;
  }

  static async create(data) {
    const response1 = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          level_sector(where: { id_level: { _eq: ${data.level} }, id_sector: { _eq: ${data.sector} } }) {
            id
          }
        }
      `,
    });
    var id_levelSector = response1.data.level_sector[0].id;

    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        insert_element(objects: {name: "${data.name.toLowerCase()}", id_matter: ${
        data.matter
      }, id_level_sector: ${id_levelSector}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.insert_element;
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
          element(where: { id: { _eq: ${id} } }) {
            id
            name
            matter {
              id
              name
            }
            level_sector {
              sector {
                id
                name
              }
              level {
                id
                name
                cycle {
                  id
                  name
                }
              }
            }
            created_at
            updated_at
          }
        }
      `,
    });

    return response.data.element[0];
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
          element( ${limit != 0 ? `limit:${limit},` : ''} ${
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
          id_matter:
          ${
            filter.matter ? `{_eq: ${filter.matter}}` : '{}'
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
            matter {
              id
              name
            }
            level_sector {
              sector {
                id
                name
              }
              level {
                id
                name
                cycle {
                  id
                  name
                }
              }
            }
            created_at
            updated_at
          }
        }
        `,
      });
    return response.data.element;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          element(where: {name: {_like: "%${query}%"}}, limit: ${limit}) {
            name
            matter {
              id
              name
            }
            level_sector {
              sector {
                id
                name
              }
              level {
                id
                name
                cycle {
                  id
                  name
                }
              }
            }
            id
          }
        }
      `,
    });

    return response.data.element;
  }

  static async listSelect(matterId, levelId, sectorId) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        element(where: {id_matter: {_eq:  ${
          matterId ? matterId : -1
        }}, level_sector: {id_sector: {_eq:  ${
        sectorId ? sectorId : -1
      }}, id_level: {_eq:  ${levelId ? levelId : -1}}} }) {
          name
          id
        }
      }
      `,
    });
    return response.data.element;
  }
}
