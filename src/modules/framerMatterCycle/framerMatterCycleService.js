import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class ClassroomTeacherMatterService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        update_framer_matter_cycle(where: {id: {_eq: ${id}}}, _set: {id_matter:  ${data.matter}, id_framer:  ${data.framer.id}, id_cycle:  ${data.cycle}, id_school_year: ${data.schoolYear}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.update_framer_matter_cycle;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_framer_matter_cycle(where: {id: {_eq: ${ids}}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.delete_framer_matter_cycle;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        insert_framer_matter_cycle(objects: {id_matter:  ${data.matter}, id_framer:  ${data.framer}, id_cycle:  ${data.cycle}, id_school_year: ${data.schoolYear}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.insert_framer_matter_cycle;
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
        framer_matter_cycle(where: {id: {_eq: ${id}}}) {
          id
          created_at
          updated_at
          framer {
            id
            first_name
            last_name
            user {
              id
              email
            }
          }
          matter {
            id
            name
          }
          cycle {
            id
            name
          }
          school_year {
            id
            name
          }
        }
      }
      `,
    });

    return response.data.framer_matter_cycle;
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

    console.log(`
    query MyQuery {
      framer_matter_cycle( ${
        limit != 0 ? `limit:${limit},` : ''
      } ${
      offset != 0 ? `offset:${offset} ,` : ''
    } order_by:{${orderBy ? orderBy : ''}}, where: {id: ${
      filter.id ? ` {_eq: ${filter.id}}` : '{}'
    },
    id_matter: ${
      filter.matter ? `{_eq: ${filter.matter}}` : '{}'
    },
    id_school_year: ${
      filter.schoolYear
        ? `{_eq: ${filter.schoolYear}}`
        : '{}'
    },
        id_cycle: ${
          filter.cycle ? `{_eq: ${filter.cycle}}` : '{}'
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
        matter {
          id
          name
        }
        cycle {
          id
          name
        }
        school_year {
          id
          name
        }
        framer {
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
  `);

    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
        query MyQuery {
          framer_matter_cycle( ${
            limit != 0 ? `limit:${limit},` : ''
          } ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id: ${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
        },
        id_matter: ${
          filter.matter ? `{_eq: ${filter.matter}}` : '{}'
        },
        id_school_year: ${
          filter.schoolYear
            ? `{_eq: ${filter.schoolYear}}`
            : '{}'
        },
            id_cycle: ${
              filter.cycle ? `{_eq: ${filter.cycle}}` : '{}'
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
            matter {
              id
              name
            }
            cycle {
              id
              name
            }
            school_year {
              id
              name
            }
            framer {
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
    return response.data.framer_matter_cycle;
  }
}
