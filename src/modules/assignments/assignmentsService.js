import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class AssignmentsService {
  static async update(id, data) {
    console.log(data);
    const response2 = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          teachers {
            id
          }
        }
      `,
    });

    var teacherId = response2.data.teachers[0].id;

    const response1 = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        classroom_teacher_matter(where: {id_classroom: {_eq: ${data.classroom.id}}, id_teacher: {_eq: ${teacherId}}, id_matter: {_eq: ${data.matter.id}}}) {
          id
        }
      }
      `,
    });

    var id_CTM =
      response1.data.classroom_teacher_matter[0].id;

    console.log({
      name: data.name,
      id_type: data.types_assignment,
      id_classroom_teacher_matter: id_CTM,
      payload: data.payload,
      id_element: data.element,
      type_course: data.type_course,
    });
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation($data: assignments_set_input!) {
          update_assignments(
            where: { id: { _eq: ${id} } }
            _set: $data
          ) {
            affected_rows
          }
        }
      `,
      variables: {
        data: {
          name: data.name,
          id_type: data.types_assignment.id,
          id_classroom_teacher_matter: id_CTM,
          payload: data.payload,
          id_element: data.element,
          type_course: data.type_course,
        },
      },
    });

    return response.data.update_assignments;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_assignments(where: {id: {_eq: ${ids}}}) {
          affected_rows
        }
      }
      
      `,
    });

    return response.data;
  }

  static async create(data) {
    const response2 = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          teachers {
            id
          }
        }
      `,
    });

    var teacherId = response2.data.teachers[0].id;

    const response1 = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        classroom_teacher_matter(where: {id_classroom: {_eq: ${data.classroom}}, id_teacher: {_eq: ${teacherId}}, id_matter: {_eq: ${data.matter}}}) {
          id
        }
      }
      `,
    });

    var id_CTM =
      response1.data.classroom_teacher_matter[0].id;

    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation(
          $object: [assignments_insert_input!]!
        ) {
          insert_assignments(objects: $object) {
            affected_rows
          }
        }
      `,

      variables: {
        object: {
          name: data.name,
          id_type: data.types_assignment,
          id_classroom_teacher_matter: id_CTM,
          payload: data.payload,
          id_element: data.element,
          type_course: data.type_course,
          coursHTML: data.coursHTML,
        },
      },
    });

    return response.data.insert_assignments;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          assignments(where: { id: { _eq: ${id} } }) {
            id
            coursHTML
            classroom_teacher_matter {
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
                  elements {
                    id
                    name
                  }
                }
              }
              matter {
                id
                name
              }
            }
            name
            type_course
            types_assignment {
              id
              name
            }
            payload
            created_at
            updated_at
          }
        }
      `,
    });

    let data = response.data.assignments[0];

    // data.level = data.classroom.level.level;
    // delete data.classroom.level.level;
    // data.level = data.classroom.level;
    // delete data.classroom.level;

    return data;
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

    console.log(`
    query MyQuery {
      assignments(order_by:{${
        orderBy ? orderBy : ''
      }}, where: {name:
        ${
          filter.name ? `{_like:"%${filter.name}%"}` : '{}'
        },
              classroom_teacher_matter: {
                classroom: {
                  id:
                  ${
                    filter.classroom
                      ? `{_eq: ${filter.classroom}}`
                      : '{}'
                  }
                }
                matter: {
                  id:
                  ${
                    filter.matter
                      ? `{_eq:${filter.matter}}`
                      : '{}'
                  }
                }
              }                  
                           
                
      
      ${
        filter.createdAtRange
          ? `,created_at:{_gte: "${filter.createdAtRange[0].format()}", _lte: "${filter.createdAtRange[1].format()}"}`
          : ''
      }
    }) {
        id
        classroom_teacher_matter {
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
              elements {
                id
                name
              }
            }
          }
          matter {
            id
            name
          }
        }
        name
        type_course
        types_assignment {
          name
          id
        }
        payload
        created_at
        updated_at
      }
    }
  `);

    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
        query MyQuery {
          assignments( ${
            limit != 0 ? `limit:${limit},` : ''
          } ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {name:
            ${
              filter.name
                ? `{_like:"%${filter.name}%"}`
                : '{}'
            },
                  classroom_teacher_matter: {
                    classroom: {
                      id:
                      ${
                        filter.classroom
                          ? `{_eq: ${filter.classroom}}`
                          : '{}'
                      }
                    }
                    matter: {
                      id:
                      ${
                        filter.matter
                          ? `{_eq:${filter.matter}}`
                          : '{}'
                      }
                    }
                  }
          ${
            filter.createdAtRange
              ? `,created_at:{_gte: "${filter.createdAtRange[0].format()}", _lte: "${filter.createdAtRange[1].format()}"}`
              : ''
          }
        }) {
            id
            classroom_teacher_matter {
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
                  elements {
                    id
                    name
                  }
                }
              }
              matter {
                id
                name
              }
            }
            name
            type_course
            types_assignment {
              name
              id
            }
            payload
            created_at
            updated_at
          }
        }
      `,
      });
    return response.data.assignments;
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

    return response.data.AssignmentsAutocomplete;
  }

  static async typeAssignment() {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          types_assignements {
            id
            name
          }
        }
      `,
    });
    return response.data.types_assignements;
  }
}
