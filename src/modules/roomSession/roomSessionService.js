import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import moment from 'moment';

export default class RoomsessionService {
  static async update(id, data) {
    const response1 = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        classroom_teacher_matter(where: {id_classroom: {_eq: ${data.classroom}}, id_teacher: {_eq: ${data.teacher}}, id_matter: {_eq: ${data.matter}}}) {
          id
        }
      }
      `,
    });

    var id_CTM =
      response1.data.classroom_teacher_matter[0].id;

    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        update_roomsession(where: {id: {_eq: ${id}}}, _set: {name: "${
        data.name
      }", id_classroom_teacher_matter: ${id_CTM}, id_week: {_eq: ${
        data.week
      }}, id_element: ${data.element}, day: ${parseInt(
        data.day,
      )}, end_time: "${moment(data.end_time).format(
        'HH:mm:ss',
      )}", start_time: "${moment(data.start_time).format(
        'HH:mm:ss',
      )}"}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.update_roomsession;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_roomsession(where: {id: {_eq: ${ids}}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.delete_roomsession;
  }

  static async create(data) {
    const response1 = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        classroom_teacher_matter(where: {id_classroom: {_eq: ${data.classroom}}, id_teacher: {_eq: ${data.teacher}}, id_matter: {_eq: ${data.matter}}}) {
          id
        }
      }
      `,
    });

    var id_CTM =
      response1.data.classroom_teacher_matter[0].id;

    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        insert_roomsession(objects: {name: "${
          data.name
        }", id_classroom_teacher_matter: ${id_CTM}, id_week: {_eq: ${
        data.week
      }}, id_element: ${data.element}, end_time: "${moment(
        data.end_time,
      ).format('HH:mm:ss')}", start_time: "${moment(
        data.start_time,
      ).format('HH:mm:ss')}", day: ${parseInt(data.day)}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.insert_roomsession;
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

    return response.data.RoomsessionImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
          roomsession(where: {id:{_eq: ${id}}}) {
            id
            name
            start_time
            end_time
            day
            createdAt
            updatedAt
            week {
              id
              start_date
              end_date
              name
              school_year {
                id
                name
              }
            }
            element {
              id
              name
            }
            classroom_teacher_matter {
              id
              classroom {
                id
                name
                level_sector {
                  id
                  level {
                    id
                    name
                    cycle {
                      id
                      name
                    }
                  }
                  sector {
                    id
                    name
                  }
                }
              }
              teacher {
                id
                first_name
                last_name
                user {
                  id
                }
              }
              matter {
                id
                name
              }
            }
          }
        }
      `,
    });

    return response.data.roomsession;
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
        roomsession( ${
          limit != 0 ? `limit:${limit},` : ''
        } ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${orderBy ? orderBy : ''}}, 
          where: {id:${
            filter.id ? ` {_eq: ${filter.id}}` : '{}'
          },
          name:${
            filter.name
              ? `{_like:"%${filter.name.label}%"}`
              : '{}'
          }
        ${
          filter.start_time
            ? `,start_time:{_eq:"${filter.start_time.format()}"}`
            : ''
        }
        ${
          filter.end_time
            ? `,end_time:{_eq:"${filter.end_time.format()}"}`
            : ''
        }
        ${filter.day ? `,day:{_eq:"${filter.day}"}` : ''}
        ${
          filter.createdAt
            ? `,createdAt:{_eq:"${filter.createdAt.format()}"}`
            : ''
        },
        
          updatedAt:
        ${
          filter.updatedAt
            ? `{_eq:"${filter.updatedAt.format()}"}`
            : '{}'
        }
        
        ${
          filter.createdAtRange
            ? `,createdAt:{_gte: "${filter.createdAtRange[0].format()}", _lte: "${filter.createdAtRange[1].format()}"}`
            : ''
        }
        }) {
          id
            name
            start_time
            end_time
            day
            createdAt
            updatedAt
            week {
              id
              name
              start_date
              end_date
              school_year {
                id
                name
              }
            }
            element {
              id
              name
            }
            classroom_teacher_matter {
              id
              classroom {
                id
                name
                level_sector {
                  id
                  level {
                    id
                    name
                    cycle {
                      id
                      name
                    }
                  }
                  sector {
                    id
                    name
                  }
                }
              }
              teacher {
                id
                first_name
                last_name
                user {
                  id
                }
              }
              matter {
                id
                name
              }
            }
          }
      }
      `,
      });

    return response.data.roomsession;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
        roomsession {
          id
          name
          start_time
          end_time
          day
          createdAt
          updatedAt
          week {
            id
            start_date
            end_date
            name
            school_year {
              id
              name
            }
          }
          element {
            id
            name
          }
          classroom_teacher_matter {
            id
            classroom {
              id
              name
              level_sector {
                id
                level {
                  id
                  name
                  cycle {
                    id
                    name
                  }
                }
                sector {
                  id
                  name
                }
              }
            }
            teacher {
              id
              first_name
              last_name
              user {
                id
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

    return response.data.roomsession;
  }

  static async getRoom() {
    const date = new Date();
    const Day = date.getDay();

    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
        query MyQuery {
          roomsession(where: {day: {_eq: ${Day}}, start_time: {_lte: "now()"}, end_time: {_gte: "now')"}}) {
            id
            name
            start_time
            end_time
            day
            createdAt
            classroom_teacher_matter {
              id_classroom
            }
          }
        }
        
        `,
      });
    let responsejson = response.data.roomsession[0];

    return responsejson;
  }

  static async getUsername(id) {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
          query MyQuery {
            getname(where: { user_id: { _eq: "${id}" } }) {
              register_data
              role
            }
          }
        `,
      });

    let responsejson = response.data.getname[0];

    return responsejson;
  }
}
