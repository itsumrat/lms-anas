import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class MatterService {
  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
          roomsession(where: { id: { _eq: ${id} } }) {
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

    return response.data.roomsession[0];
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
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id:${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
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
        ${filter.matter ? `{_eq: ${filter.matter}}` : '{}'}
          }
        }
    
  }) {
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

    var dataCalendar = {
      data: {
        type: 'teacher',
        roomsession: response.data.roomsession,
      },
    };

    return dataCalendar;
  }
}
