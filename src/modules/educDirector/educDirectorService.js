import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import role from 'security/roles';
import authService from 'modules/auth/authService';

export default class EducDirectorService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyQuery {
        update_educDirector(where: {id: {_eq: ${id}}}, _set: {first_name: "${data.first_name}",last_name: "${data.last_name}"}) {
          affected_rows
          returning {
            id_user
          }
        }
      }
      `,
    });
    let user_id =
      response.data.update_educDirector.returning[0]
        .id_user;

    var responseGraphql = await graphqlClient
      .config()
      .mutate({
        mutation: gql`
          mutation MyMutation($object: users_set_input!) {
            update_users(
              where: { id: { _eq: "${user_id}"} }
              _set: $object
            ) {
              affected_rows
            }
          }
        `,
        variables: {
          object: {
            email: data.email,
            phone: data.phone,
          },
        },
      });

    return responseGraphql.data.update_users;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation {
          delete_educDirector(where: {id: {_eq: ${ids}}}) {
            affected_rows
            returning {
              id_user
            }
          }
        }
        `,
    });
    let id_user =
      response.data.delete_educDirector.returning[0]
        .id_user;

    const response1 = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation {
          delete_users(where: {id: {_eq: "${id_user}"}}) {
            affected_rows
          }
        }
        `,
    });

    return response1.data.delete_users;
  }

  static async create(data) {
    let userId = await authService.createUser({
      email: data.email,
      phone: data.phone,
      role: role.values.educDirector,
    });

    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation(
          $data: [educDirector_insert_input!]!
        ) {
          insert_educDirector(objects: $data) {
            affected_rows
            returning {
              id
            }
          }
        }
      `,
      variables: {
        data: {
          id_user: userId,
          first_name: data.first_name,
          last_name: data.last_name,
        },
      },
    });

    return response.data.insert_educDirector;
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

    return response.data.EducDirectorImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        educDirector(
          where: {id: {_eq: ${id}}}
        ) {
          id
          updated_at
          created_at
          last_name
          first_name
          user {
            email
            id
            phone
          }
        }
      }
      `,
    });

    return response.data.educDirector;
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
          educDirector( ${
            limit != 0 ? `limit:${limit},` : ''
          } ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id: ${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
        },
        first_name:
              ${
                filter.first_name
                  ? `{_like: "%${filter.first_name}%"}`
                  : '{}'
              },
              last_name:
              ${
                filter.last_name
                  ? `{_like: "%${filter.last_name}%"}`
                  : '{}'
              },
            user: {
              email:
              ${
                filter.email
                  ? `{_like: "%${filter.email}%"}`
                  : '{}'
              }
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
            id
            updated_at
            created_at
            first_name
            last_name
            user {
              email
              id
              phone
            }
          }
        }
        `,
      });

    console.log(`
      query MyQuery {
        educDirector( ${
          limit != 0 ? `limit:${limit},` : ''
        } ${
      offset != 0 ? `offset:${offset} ,` : ''
    } order_by:{${orderBy ? orderBy : ''}}, where: {id: ${
      filter.id ? ` {_eq: ${filter.id}}` : '{}'
    },
      first_name:
            ${
              filter.first_name
                ? `{_like: "%${filter.first_name}%"}`
                : '{}'
            },
            last_name:
            ${
              filter.last_name
                ? `{_like: "%${filter.last_name}%"}`
                : '{}'
            },
          user: {
            email:
            ${
              filter.email
                ? `{_like: "%${filter.email}%"}`
                : '{}'
            }
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
          id
          updated_at
          created_at
          first_name
          last_name
          user {
            email
            id
            phone
          }
        }
      }
      `);

    return response.data.educDirector;
  }

  static async listAutocomplete(query, limit) {
    var Myarray = query.split(' ');
    if (Myarray.length == 1) {
      Myarray[1] = '';
    }

    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        educDirector(where: {
          _or: [
            {last_name: {_like: "%${Myarray[0]}%"}, first_name: {_like: "%${Myarray[1]}%"}},
            {first_name: {_like: "%${Myarray[0]}%"}, last_name: {_like: "%${Myarray[1]}%"}}
          ]
        }, limit: ${limit}) {
          id
          first_name
          last_name
          user {
            phone
            id
          }
        }
      }
      `,
    });

    var newMap = response.data.educDirector.map((item) => {
      return {
        id: item.id,
        label: item.first_name + ' ' + item.last_name,
      };
    });

    return newMap;
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
          user {
            email
            id
            phone
          }
        }
      }
      `,
    });
    return response.data.educDirector;
  }
}
