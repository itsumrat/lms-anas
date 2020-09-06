import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class WeekService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        update_week(where: {id: {_eq: ${id}}}, _set: {id_school_year:  ${data.schoolYear.id}, name:  ${data.name}, start_date: ${data.start_date}, end_date: ${data.end_date}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.update_week;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_week(where: {id: {_eq: ${ids}}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.delete_week;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        insert_week(objects: {id_school_year:  ${data.schoolYear}, name:  ${data.name}, start_date: ${data.start_date}, end_date: ${data.end_date}}) {
          affected_rows
        }
      }
      `,
    });

    return response.data.insert_week;
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

    return response.data.WeekImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        week(where: {id: {_eq: ${id}}}) {
          id
          created_at
          updated_at
          school_year {
            id
            name
          }
          name
          start_date
          end_date
        }
      }
      `,
    });

    return response.data.week;
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
          week( ${limit != 0 ? `limit:${limit},` : ''} ${
          offset != 0 ? `offset:${offset} ,` : ''
        } order_by:{${
          orderBy ? orderBy : ''
        }}, where: {id:${
          filter.id ? ` {_eq: ${filter.id}}` : '{}'
        }
            
            ${
              filter.createdAt
                ? `,created_at:{_eq:"${filter.createdAt.format()}"}`
                : ''
            },
          
            updated_at:
          ${
            filter.updatedAt
              ? `{_eq:"${filter.updatedAt.format()}"}`
              : '{}'
          }
          
          ${
            filter.createdAtRange
              ? `,created_at:{_gte: "${filter.createdAtRange[0].format()}", _lte: "${filter.createdAtRange[1].format()}"}`
              : ''
          }
          }){
              id
              created_at
              updated_at
              school_year {
                id
                name
              }
              name
              start_date
              end_date
            }
          }
        `,
      });

    return response.data.week;
  }

  static async listSelect(schoolYear) {
    const response = await graphqlClient.config().query({
      query: gql`
      query MyQuery {
        week(
          where: {
            id_school_year: {
              ${schoolYear ? `_eq: ${schoolYear}` : ``}
            }
          }
        ) {
          name
          id
        }
      }
      `,
    });

    return response.data.week;
  }
}
