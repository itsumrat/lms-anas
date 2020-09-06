import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import role from 'security/roles';
import authService from 'modules/auth/authService';

export default class EducDirectorCycleService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        update_educDirector_cycle(where: {id: {_eq: ${id}}}, _set: {id_cycle: ${data.cycle}, id_educDirector: ${data.educDirector.id}, id_school_year: ${data.schoolYear.id}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.update_educDirector_cycle;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_educDirector_cycle(where: {id: {_eq: ${ids}}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.delete_educDirector_cycle;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation {
          insert_educDirector_cycle(objects: {id_cycle: ${data.cycle}, id_educDirector: ${data.educDirector}, id_school_year: ${data.schoolYear}}) {
            affected_rows
          }
        }
      `,
    });

    return response.data.insert_educDirector_cycle;
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

    return response.data.EducDirectorCycleImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        educDirector_cycle(
          where: {id: {_eq: ${id}}}
        ) {
          cycle {
            name
            id
          }
          educDirector {
            first_name
            last_name
            id
          }
          school_year {
            id
            name
          }
          id
          updated_at
          created_at
        }
      }
      `,
    });

    return response.data.educDirector_cycle;
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
          educDirector_cycle( ${
            limit != 0 ? `limit:${limit},` : ''
          } ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id: ${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
        },              
          id_cycle:
                ${
                  filter.cycle
                    ? `{_eq: ${filter.cycle.id}}`
                    : '{}'
                },
              id_educDirector:
              ${
                filter.educDirector
                  ? `{_eq: ${filter.educDirector.id}}`
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
                cycle {
                  name
                  id
                }
                educDirector {
                  first_name
                  last_name
                  id
                }
                school_year {
                  id
                  name
                }
                id
                updated_at
                created_at
              }
            }
        `,
      });

    return response.data.educDirector_cycle;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        educDirector_cycle(where: {educDirector: {user: {name: {_like: "%${query}%"}}}}, limit: ${limit}) {
          cycle {
            name
            id
          }
          educDirector {
            first_name
            last_name
            id
          }
          school_year {
            id
            name
          }
          id
          updated_at
          created_at
        }
      }
      `,
    });

    return response.data.educDirector_cycle;
  }

  static async listSelect(limit) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        educDirector(limit: ${limit}) {
          id
          updated_at
          created_at
          first_name
          last_name
        }
      }
      `,
    });
    return response.data.educDirector;
  }
}
