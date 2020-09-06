import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import role from 'security/roles';
import authService from 'modules/auth/authService';

export default class LevelSectorService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        update_level_sector(where: {id: {_eq: ${id}}}, _set: {id_sector: ${data.sector}, id_level: ${data.level}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.update_level_sector;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_level_sector(where: {id: {_eq: ${ids}}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.delete_level_sector;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation {
          insert_level_sector(objects: {id_sector: ${data.sector}, id_level: ${data.level}}) {
            affected_rows
          }
        }
      `,
    });

    return response.data.insert_level_sector;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.config().mutate({
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

    return response.data.LevelSectorImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        level_sector(
          where: {id: {_eq: ${id}}}
        ) {
          sector {
            name
            id
          }
          level {
            name
            id
            cycle {
              id
              name
            }
          }
          id
          updated_at
          created_at
        }
      }
      `,
    });

    return response.data.level_sector;
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
          level_sector( ${
            limit != 0 ? `limit:${limit},` : ''
          } ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id: ${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
        },              
          id_sector:
                ${
                  filter.sector
                    ? `{_eq: ${filter.sector.id}}`
                    : '{}'
                },
              id_level:
              ${
                filter.level
                  ? `{_eq: ${filter.level.id}}`
                  : '{}'
              }
              
              ${
                filter.created_at
                  ? `,created_at:{_eq:"${filter.created_at.format()}"}`
                  : ''
              },
            
                updated_at:
            ${
              filter.updated_at
                ? `{_eq:"${filter.updated_at.format()}"}`
                : '{}'
            }
            
            ${
              filter.createdAtRange
                ? `,created_at:{_gte: "${filter.createdAtRange[0].format()}", _lte: "${filter.createdAtRange[1].format()}"}`
                : ''
            }
              }) {
                sector {
                  name
                  id
                }
                level {
                  name
                  id
                  cycle {
                    id
                    name
                  }
                }
                id
                updated_at
                created_at
              }
            }
        `,
      });

    return response.data.level_sector;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        level_sector(where: {level: {user: {name: {_like: "%${query}%"}}}}, limit: ${limit}) {
          sector {
            name
            id
          }
          level {
            name
            id
            cycle {
              id
              name
            }
          }
          id
          updated_at
          created_at
        }
      }
      `,
    });

    return response.data.level_sector;
  }

  static async listSelect(limit) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        level(limit: ${limit}) {
          id
          updated_at
          created_at
          name
        }
      }
      `,
    });
    return response.data.level;
  }
}
