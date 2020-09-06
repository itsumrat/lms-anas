import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import role from 'security/roles';
import authService from 'modules/auth/authService';

export default class StudentsService {
  static async update(id, data) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        update_users(where: {
          students: {id: {_eq: ${id}}}},
          _set: {
            email: "${data.email}",
            phone: "${data.phone}"
          }) {
            affected_rows
        }
      }
      `,
    });

    const response1 = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation{
        update_students(where: {id: {_eq: ${id}}},
          _set: {
            code_massar: "${data.code_massar}",
            last_name: "${data.last_name}",
            first_name: "${data.first_name}"
            ${
              data.father
                ? `,id_father: ${data.father.id}`
                : ''
            }
            ${
              data.mother
                ? `,id_mother: ${data.mother.id}`
                : ''
            }
            ${
              data.tutor1
                ? `,id_tutor1: ${data.tutor1.id}`
                : ''
            }
            ${
              data.tutor2
                ? `,id_tutor2: ${data.tutor2.id}`
                : ''
            }
            ${
              data.quality_tutor1
                ? `,quality_tutor1: ${parseInt(
                    data.quality_tutor1,
                  )}`
                : ''
            }
            ${
              data.quality_tutor2
                ? `,quality_tutor2: ${parseInt(
                    data.quality_tutor2,
                  )}`
                : ''
            }
          }) {
            affected_rows
        }
      }
      `,
    });

    return response.data.update_users;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_students(where: {id: {_eq: ${ids}}}) {
          affected_rows
          returning {
            id_user
          }
        }
      }
      `,
    });
    let id_user =
      response.data.delete_students.returning[0].id_user;

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
      role: role.values.student,
    });

    const resp1 = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        insert_students(objects: {
          id_user: "${userId}",
          code_massar: "${data.code_massar}",
          last_name: "${data.last_name}",
          first_name: "${data.first_name}",
          ${
            data.father
              ? `,id_father: ${data.father.id}`
              : ''
          }
          ${
            data.mother
              ? `,id_mother: ${data.mother.id}`
              : ''
          }
          ${
            data.tutor1
              ? `,id_tutor1: ${data.tutor1.id}`
              : ''
          }
          ${
            data.tutor2
              ? `,id_tutor2: ${data.tutor2.id}`
              : ''
          }
          ${
            data.quality_tutor1
              ? `,quality_tutor1: ${parseInt(
                  data.quality_tutor1,
                )}`
              : ''
          }
          ${
            data.quality_tutor2
              ? `,quality_tutor2: ${parseInt(
                  data.quality_tutor2,
                )}`
              : ''
          }
        }) {
          affected_rows
        }
      }
      `,
    });

    return resp1.data.insert_students;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          students(where: {id: {_eq: ${id}}}) {
            id
            id_user
            updated_at
            created_at
            code_massar
            first_name
            last_name
            user {
              email
              phone
              id
            }
            father {
              id
              first_name
              last_name
              user {
                email
                id
              }
            }
            quality_tutor1
            quality_tutor2
            mother {
              id
              first_name
              last_name
              user {
                id
                email
              }
            }
            tutor1 {
              id
              first_name
              last_name
              user {
                email
                id
              }
            }
            tutor2 {
              id
              first_name
              last_name
              user {
                email
                id
              }
            }
          }
        }
      `,
    });

    return response.data.students[0];
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
            students( ${
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
        }%"}
          user: {email: {_like: "%${
            filter.email ? `${filter.email}` : ''
          }%"}}}
        ) {
              id
              id_user
              updated_at
              created_at
              first_name
              last_name
              user {
                email
                phone
                id
              }
              father {
                id
                first_name
                last_name
                user {
                  email
                  id
                }
              }
              quality_tutor1
              quality_tutor2
              code_massar
              mother {
                id
                first_name
                last_name
                user {
                  id
                  email
                }
              }
              tutor1 {
                id
                first_name
                last_name
                user {
                  email
                  id
                }
              }
              tutor2 {
                id
                first_name
                last_name
                user {
                  email
                  id
                }
              }
            }
          }
        `,
      });
    return response.data.students;
  }

  static async listAutocomplete(query, limit) {
    var Myarray = query.split(' ');
    if (Myarray.length == 1) {
      Myarray[1] = '';
    }

    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        students(where: {
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

    var newMap = response.data.students.map((item) => {
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
          students(where: {}, limit: ${limit}) {
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

    return response.data.students;
  }
}
