import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import config from 'config';
import axios from 'axios';
import role from 'security/roles';
import authService from 'modules/auth/authService';
export default class TeachersService {
  static async update(id, data) {
    var response = await graphqlClient.config().query({
      query: gql`
      mutation MyMutation($data: teachers_set_input!) {
        update_teachers(where: {id: {_eq: ${id}}}, _set: $data) {
          affected_rows
          returning {
            id_user
          }
        }
      }
      `,
      variables: {
        data: {
          schedule: data.schedule,
          first_name: data.first_name,
          last_name: data.last_name,
        },
      },
    });
    let user_id =
      response.data.update_teachers.returning[0].id_user;

    var responseGraphql = await graphqlClient
      .config()
      .mutate({
        mutation: gql`
          mutation MyMutation{
            update_users(where: {
              id: {_eq: "${user_id}"}},
              _set: {
                email: "${data.email}",
                phone: "${data.phone}"
              }) {
                affected_rows
            }
          }
        `,
      });

    return responseGraphql.data.update_users;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation {
          delete_teachers(where: {id: {_eq: ${ids}}}) {
            affected_rows
            returning {
              id_user
            }
          }
        }
        `,
    });
    let id_user =
      response.data.delete_teachers.returning[0].id_user;

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
      role: role.values.teacher,
    });

    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation(
          $data: [teachers_insert_input!]!
        ) {
          insert_teachers(objects: $data) {
            affected_rows
            returning {
              id
            }
          }
        }
      `,
      variables: {
        data: {
          schedule: data.schedule,
          id_user: userId,
          first_name: data.first_name,
          last_name: data.last_name,
        },
      },
    });

    return response.data.insert_teachers;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          teachers(where: {id: {_eq: ${id}}}) {
            id
            schedule
            first_name
            last_name
            user {
              phone
              email
            }
            created_at
            updated_at
          }
        }
      `,
    });

    return response.data.teachers[0];
  }

  static async list(filter, orderBy, limit, offset) {
    if (
      filter &&
      filter.created_at &&
      filter.created_atRange
    ) {
      delete filter.created_at;
    }
    if (filter == undefined) filter = {};

    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
        query MyQuery {
          teachers( ${
            limit != 0 ? `limit:${limit},` : ''
          } ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id:${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
        }, first_name: {_like: "%${
          filter.first_name ? `${filter.first_name}` : ''
        }%"}, last_name: {_like: "%${
          filter.last_name ? `${filter.last_name}` : ''
        }%"},
              user: {email: {_like: "%${
                filter.email ? `${filter.email}` : ''
              }%"}}}) {
            id
            schedule
            first_name
            last_name
            user {
              email
              phone
            }
            created_at
            updated_at
          }
        }
      `,
      });

    return response.data.teachers;
  }

  static async listAutocomplete(query, limit) {
    var Myarray = query.split(' ');
    if (Myarray.length == 1) {
      Myarray[1] = '';
    }

    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        teacher(where: {
          _or: [
            {last_name: {_like: "%${Myarray[0]}%"}, first_name: {_like: "%${Myarray[1]}%"}},
            {first_name: {_like: "%${Myarray[0]}%"}, last_name: {_like: "%${Myarray[1]}%"}}
          ]
        }, limit: ${limit}) {
          id
          first_name
          last_name
          user {
            id
          }
        }
      }
      `,
    });

    var newMap = response.data.teacher.map((item) => {
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
          teachers {
            id
            first_name
            last_name
            user {
              email
            }
            created_at
            updated_at
          }
        }
      `,
    });

    return response.data.teachers;
  }
}
