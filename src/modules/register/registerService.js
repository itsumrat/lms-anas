import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class RegisterService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        update_register(where: {id: {_eq: ${id}}}, _set: {id_classroom: ${data.classroom.id}, id_student:  ${data.student.id}, id_school_year:  ${data.schoolYear.id}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.update_register;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_register(where: {id: {_eq: ${ids}}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.delete_register;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        insert_register(objects: {id_classroom: ${data.classroom}, id_student:  ${data.student.id}, id_school_year:  ${data.schoolYear}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.insert_register;
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

    return response.data.RegisterImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        register(where: {id: {_eq: ${id}}}) {
          id
          created_at
          updated_at
          classroom {
            id
            name
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
          }
          school_year {
            id
            name
          }
          student {
            id
            first_name
            last_name
            user {
              id
              email
            }
          }
        }
      }
      `,
    });

    return response.data.register;
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
          register( ${
            limit != 0 ? `limit:${limit},` : ''
          } ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id:${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
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
            }){
                id
                updated_at
                created_at
                classroom {
                  id
                  name
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
                }
                school_year {
                  id
                  name
                }
                student {
                  id
                  first_name
                  last_name
                  user {
                    id
                    email
                  }
                }
              }
        }
        `,
      });

    return response.data.register;
  }
}
