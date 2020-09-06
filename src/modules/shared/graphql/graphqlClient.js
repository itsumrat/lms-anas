import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import config from 'config';
import * as firebase from 'firebase/app';
import { getLanguageCode } from 'i18n';
import { RetryLink } from 'apollo-link-retry';
import { getStore } from 'modules/store';
import authService from 'modules/auth/authService';
export default class graphqlClientConfig {
  static config() {
    const retryLink = new RetryLink({
      attempts: {
        max: 2,
      },
    });

    const authLink = setContext(async (_, { headers }) => {
      var token = getStore().getState().auth.jwt_token;
      var refresh_token = getStore().getState().auth
        .refresh_token;
      var userrole = null;
      if (getStore().getState().auth.currentUser) {
        var userrole = getStore().getState().auth
          .currentUser.user_roles[0];
      }

      let status = await authService.valideToken(token);
      if (status == 0) {
        let data = await authService.refreshToken(
          refresh_token,
        );
        token = data.jwt_token;
        refresh_token = data.refresh_token;
        localStorage.setItem(
          'refresh_token',
          refresh_token,
        );

        getStore().dispatch({
          type: 'AUTH_SAVE_TOKEN',
          payload: {
            refresh_token: refresh_token,
            jwt_token: token,
          },
        });
      }

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
          'X-Hasura-Role': userrole
            ? userrole.role
            : 'user',
          //'Accept-Language': getLanguageCode(),,
        },
      };
    });

    const httpLink = createHttpLink({
      uri: `${config.backendUrl}`,
    });

    const defaultOptions = {
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    };

    const graphqlClient = new ApolloClient({
      link: retryLink.concat(authLink.concat(httpLink)),
      cache: new InMemoryCache({
        addTypename: false,
      }),
      defaultOptions: defaultOptions,
    });
    return graphqlClient;
  }
}
