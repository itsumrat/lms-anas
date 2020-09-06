import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class ClassroomService {
  static async update(id, data) {
    const response1 = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        level_sector(where: {id_sector: {_eq: ${data.sector.id}}, id_level: {_eq: ${data.level.id}}}) {
          id
        }
      }
      `,
    });

    var levelSectorId = response1.data.level_sector[0].id;

    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation($data:classroom_set_input!) {
        update_classroom(where: {id: {_eq: ${id}}}, _set: $data) {
          affected_rows
        }
      }
      `,
      variables: {
        data: {
          name: data.name,
          id_level_sector: levelSectorId,
          schedule: data.schedule,
        },
      },
    });

    return response.data.update_classroom;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_classroom(where: {id: {_eq: ${ids}}}) {
          affected_rows
        }
      }
`,
    });

    return response.data.delete_classroom;
  }

  static async create(data) {
    const response1 = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        level_sector(where: {id_sector: {_eq: ${data.sector}}, id_level: {_eq: ${data.level}}}) {
          id
        }
      }
      `,
    });

    var levelSectorId = response1.data.level_sector[0].id;

    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation(
          $data: [classroom_insert_input!]!
        ) {
          insert_classroom(objects: $data) {
            affected_rows
          }
        }
      `,
      variables: {
        data: {
          name: data.name,
          id_level_sector: levelSectorId,
          schedule: data.schedule,
        },
      },
    });

    return response.data.insert_classroom;
  }

  // if( getLanguageCode() == 'fr' || getLanguageCode() == 'en' ) {

  //   return response.data.classroom[0];
  // } else {

  //

  //   var newMap=response.data.classroom.map((item) => {
  //
  //     return({
  //     id: item.id,
  //     name: item.alias_ar,
  //     sector: item.sector,
  //     level: item.sector,
  //     cycle: item.sector,
  //     created_at: item.created_at,
  //     updated_at: item.updated_at,
  //     schedule: item.schedule,
  //     designation: item.designation,
  //   })})

  //

  //   return newMap;
  // }

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

    return response.data.ClassroomImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        classroom(where: {id: {_eq: ${id}}}) {
          id
          name
          created_at
          id_level_sector
          updated_at
          schedule
          level_sector {
            id
            sector {
              name
              id
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
      }
      `,
    });

    return response.data.classroom[0];
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
                  classroom( ${
                    limit != 0 ? `limit:${limit},` : ''
                  } ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id:${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
        },
                name:
                ${
                  filter.name
                    ? `{_like:"%${filter.name}%"}`
                    : '{}'
                }
                
                ${
                  filter.created_at
                    ? `,created_at:{_eq:"${filter.created_at.format()}"}`
                    : ''
                }
              
                
              ${
                filter.updated_at
                  ? `,updated_at:{_eq:"${filter.updated_at.format()}"}`
                  : ''
              }
               
              ${
                filter.created_atRange
                  ? `,created_at:{_gte: "${filter.created_atRange[0].format()}", _lte: "${filter.created_atRange[1].format()}"}`
                  : ''
              }
              
            }) {
              name
              created_at
              id_level_sector
              updated_at
              schedule
              id
              level_sector {
                id
                sector {
                  name
                  id
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
          }
        `,
      });

    return response.data.classroom;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          classroom(where: {name: {_like: "%${query}%"}}, limit: ${limit}) {
            name
            id
          }
        }
      `,
    });

    return response.data.classroom;
  }

  static async listSelect(level, sector) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        classroom(
          where: {
            level_sector: {
              id_sector: { ${
                sector ? `_eq: ${sector}` : ``
              } }
              id_level: { ${level ? `_eq: ${level}` : ``} }
            }
          }
        ) {
          name
          id
        }
      }
      `,
    });

    return response.data.classroom;
  }
}
