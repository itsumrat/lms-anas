import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class ClassroomTeacherMatterService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        update_classroom_teacher_matter(where: {id: {_eq: ${id}}}, _set: {id_classroom: ${data.classroom.id}, id_matter:  ${data.matter.id}, id_teacher:  ${data.teacher.id}, id_school_year:  ${data.schoolYear.id}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.update_classroom_teacher_matter;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_classroom_teacher_matter(where: {id: {_eq: ${ids}}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.delete_classroom_teacher_matter;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        insert_classroom_teacher_matter(objects: {id_classroom: ${data.classroom}, id_matter:  ${data.matter}, id_teacher:  ${data.teachers}, id_school_year:  ${data.schoolYear}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.insert_classroom_teacher_matter;
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

    return response.data.ClassroomTeacherMatterImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        classroom_teacher_matter(where: {id: {_eq: ${id}}}) {
          id
          created_at
          updated_at
          school_year {
            id
            name
          }
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
          teacher {
            id
            user {
              id
              first_name
              last_name
              name
              email
            }
          }
          matter {
            id
            name
          }
        }
      }
      `,
    });

    return response.data.classroom_teacher_matter;
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
          classroom_teacher_matter(limit: ${limit},order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id: ${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
        },
        id_classroom: ${
          filter.classroom
            ? `{_eq: ${filter.classroom}}`
            : '{}'
        },
        id_matter: ${
          filter.matter ? `{_eq: ${filter.matter}}` : '{}'
        },
        id_teacher: ${
          filter.teachers
            ? `{_eq: ${filter.teachers.id}}`
            : '{}'
        }
            }) {
            id
            updated_at
            created_at
            school_year {
              id
              name
            }
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
            teacher {
              id
              user {
                id
                first_name
                last_name
                name
                email
              }
            }
            matter {
              id
              name
            }
          }
        }
      `,
      });
    return response.data.classroom_teacher_matter;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query booking_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          bookingAutocomplete(
            query: $query
            limit: $limit
          ) {
            id
            label
          }
        }
      `,

      variables: {
        query,
        limit,
      },
    });

    return response.data.ClassroomTeacherMatterAutocomplete;
  }
}
