import gql from 'graphql-tag';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class AuditLogService {
  static async fetch(filter, orderBy, limit, offset) {
    const response = await graphqlClientConfig.config().query({
      query: gql`
        query AUDIT_LOG_LIST(
          $filter: AuditLogListFilterInput
          $orderBy: AuditLogListOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          auditLogList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              entityName
              entityId
              action
              timestamp
              createdByEmail
              values
            }
          }
        }
      `,

      variables: {
        filter,
        orderBy,
        limit,
        offset,
      },
    });

    return response.data.auditLogList;
  }
}
