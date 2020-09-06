import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import role from 'security/roles';
import authService from 'modules/auth/authService';

export default class StudentsService {
  static async listMatters() {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
          query MyQuery {
            matter {
              createdAt
              id
              name
              updatedAt
            }
          }
        `,
      });
    return response.data.matter;
  }

  static async listAssignements(id) {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
        query MyQuery {
            assignments(where: {matter_id: {_eq: ${id}}}) {
              id
              class_id
              assignment_name
              types_assignment {
                name
              }
              payload
              createdAt
              updatedAt
            }
          }
          
        `,
      });
    return response.data.assignments;
  }
}
