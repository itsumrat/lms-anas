import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import { getLanguageCode } from 'i18n';
import Permissions from 'security/permissions';
import PermissionChecker from 'modules/auth/permissionChecker';
import { getStore } from 'modules/store';

export default class CourseStudentsService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        update_courseStudents(where: {id: {_eq: ${id}}}, _set: {name: "${data.name}"}) {
          affected_rows
        }
      }
      
      `,
    });

    return response.data.update_courseStudents;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_courseStudents(where: {id: {_eq: ${ids}}}) {
          affected_rows
        }
      }
      
      `,
    });

    return response.data.delete_courseStudents;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        insert_courseStudents(objects: {name: "${data.name.toLowerCase()}"}) {
          affected_rows
        }
     }    
      `,
    });

    return response.data.insert_courseStudents;
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

    return response.data.CourseStudentsImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        courseStudents(where: {id: {_eq: ${id}}}) {
          id
          name
          createdAt
          updatedAt
        }
      }
      
      `,
    });

    console.log(response.data.courseStudents[0]);

    return response.data.courseStudents[0];
  }

  static async list(filter, orderBy, limit, offset) {
    const CurrentUser = await getStore().getState().auth
      .currentUser;
    const permissions = Permissions.values;
    const permissionChecker = new PermissionChecker(
      CurrentUser,
    );
    console.log(!filter);
    var standar = false;
    if (
      permissionChecker.match(permissions.HomeFramer) ||
      permissionChecker.match(permissions.HomeParent)
    ) {
      standar = true;
    }

    if (standar && !filter) {
      return [];
    }

    if (
      standar &&
      filter &&
      Object.keys(filter).length == 0
    ) {
      return [];
    }

    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
          query MyQuery(
            $matter: Int
            $cycle: Int
            $classroom: Int
            $student: Int
          ) {
            matter(
              where: {
                framer_matters: {
                  id_matter: { _eq: $matter }
                  id_cycle: { _eq: $cycle }
                }
                classroom_teacher_matters: {
                  classroom: {
                    id: { _eq: $classroom }
                    registers: {
                      id_student: { _eq: $student }
                    }
                  }
                }
              }
            ) {
              name
              id
              elements {
                name
                assignments {
                  coursHTML
                  created_at
                  id
                  id_classroom_teacher_matter
                  id_element
                  id_type
                  name
                  payload
                  type_course
                }
              }
            }
          }
        `,
        variables: {
          cycle:
            filter && filter.cycle ? filter.cycle : null,
          matter:
            filter && filter.matter ? filter.matter : null,

          classroom:
            filter && filter.classroom
              ? filter.classroom
              : null,

          student:
            filter && filter.student
              ? filter.student
              : null,
        },
      });

    return response.data.matter;
  }

  static async listSelect(limit) {
    console.log(`
    query MyQuery {
      courseStudents(where: {}, limit: ${limit}) {
        id
        name
      }
    }
    `);
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        courseStudents(where: {}, limit: ${limit}) {
          id
          name
        }
      }
      `,
    });
    return response.data.courseStudents;

    // const response = await graphqlClient.config().query({
    //   query: gql`
    //   query MyQuery {
    //     courseStudents(where: {}, limit: ${limit}) {
    //       id
    //       name_${getLanguageCode?getLanguageCode:'fr'}

    //     }
    //   }

    //   `,
    // });

    //     var data= response.data.courseStudents;
    // var new_data = data.map(item=>({
    //   name:item[`name_${getLanguageCode?getLanguageCode:'fr'}`],
    //   id:item.id
    // }))
    // return new_data;
  }
}
