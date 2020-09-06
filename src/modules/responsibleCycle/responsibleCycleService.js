import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import role from 'security/roles';
import authService from 'modules/auth/authService';

export default class ResponsibleCycleService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        update_responsible_cycle(where: {id: {_eq: ${id}}}, _set: {id_cycle: ${data.cycle}, id_responsible: ${data.responsible.id}, id_school_year: ${data.schoolYear}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.update_responsible_cycle;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_responsible_cycle(where: {id: {_eq: ${ids}}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.delete_responsible_cycle;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation {
          insert_responsible_cycle(objects: {id_cycle: ${data.cycle}, id_responsible: ${data.responsible}, id_school_year: ${data.schoolYear}}) {
            affected_rows
          }
        }
      `,
    });

    return response.data.insert_responsible_cycle;
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

    return response.data.ResponsibleCycleImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        responsible_cycle(
          where: {id: {_eq: ${id}}}
        ) {
          cycle {
            name
            id
          }
          school_year {
            name
            id
          }
          responsible {
            first_name
            last_name
            id
          }
          id
          updated_at
          created_at
        }
      }
      `,
    });

    return response.data.responsible_cycle;
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
          responsible_cycle( ${
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
                id_responsible:
                ${
                  filter.responsible
                    ? `{_eq: ${filter.responsible.id}}`
                    : '{}'
                },
                id_school_year:
                ${
                  filter.schoolYear
                    ? `{_eq: ${filter.schoolYear.id}}`
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
                school_year {
                  name
                  id
                }
                responsible {
                  first_name
                  last_name
                  id
                }
                id
                updated_at
                created_at
              }
            }
        `,
      });

    return response.data.responsible_cycle;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        responsible_cycle(where: {responsible: {user: {name: {_like: "%${query}%"}}}}, limit: ${limit}) {
          cycle {
            name
            id
          }
          school_year {
            name
            id
          }
          responsible {
            first_name
            last_name
            id
          }
          id
          updated_at
          created_at
        }
      }
      `,
    });

    return response.data.responsible_cycle;
  }

  static async listSelect(limit) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        responsible(limit: ${limit}) {
          id
          updated_at
          created_at
          last_name
          first_name
          user {
            email
            id
            name
          }
        }
      }
      `,
    });
    return response.data.responsible;
  }
}
