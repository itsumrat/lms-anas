import gql from 'graphql-tag';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import axios from 'axios';
import { getStore } from 'modules/store';
import config from 'config';

export default class AuthService {
  static async createUser(data) {
    var data = await axios.post(
      `${config.authApi}local/register`,
      {
        ...data,
      },
    );

    return data.data.user_id;
  }

  static async onAuthStateChanged(
    callbackSuccess,
    callbackError,
  ) {
    try {
      var user = null;
      let refresh_token = localStorage.getItem(
        'refresh_token',
      );
      if (refresh_token != null) {
        let data = await this.refreshToken(refresh_token);
        user = data;
      }
      callbackSuccess(user);
    } catch (error) {
      callbackError(error);
    }
  }

  static async valideToken(token) {
    var data = await axios.post(
      `${config.authApi}test_token`,
      {
        token: token,
      },
    );

    return data.data.status;
  }

  static async refreshToken(refreshtoken) {
    var data = await axios.post(
      `${config.authApi}refresh-token`,
      {
        refresh_token: refreshtoken,
      },
    );
    return data.data;
  }

  static async sendEmailVerification(authenticationUser) {
    let user = authenticationUser.currentUser;

    var data = await axios.post(
      `${config.authApi}init-activate-account`,
      {
        email: user.email,
      },
    );
    return data.data.status;
  }

  static async sendEmailVerificationFromBackend(
    authenticationUser,
  ) {
    return null;
  }

  static async sendEmailVerificationFromClient(
    authenticationUser,
  ) {
    return [];
  }

  static async sendPasswordResetEmail(email) {
    var data = await axios.post(
      `${config.authApi}forgot-password`,
      {
        email: email,
      },
    );

    return data.data.status;
  }

  static async sendCodeResetEmail(email, code) {
    var data = await axios.post(
      `${config.authApi}reset-password`,
      {
        email: email,
        uuid: code,
      },
    );
    return data.data;
  }
  static async sendPasswordResetEmailFromBackend(email) {
    const response = await graphqlClientConfig
      .config()
      .mutate({
        mutation: gql`
          mutation AUTH_SEND_PASSWORD_RESET_EMAIL(
            $email: String!
          ) {
            authSendPasswordResetEmail(email: $email)
          }
        `,
        variables: {
          email,
        },
      });

    return response.data.authSendPasswordResetEmail;
  }

  static async registerWithEmailAndPassword(
    email,
    password,
  ) {
    var language = navigator.languages.map((item) => {
      if (item.includes('-')) {
        return item.split('-')[0];
      }
      return 'fr';
    });

    var data = await axios.post(
      `${config.authApi}local/register`,
      {
        email: email,
        password: password,
        register_data: {},
        language: language[0],
        timezone: Intl.DateTimeFormat().resolvedOptions()
          .timeZone,
      },
    );
    return data;
  }

  static async signinWithEmailAndPassword(
    email,
    password,
    rememberMe = false,
  ) {
    var data = await axios.post(
      `${config.authApi}local/login`,
      {
        email: email,
        password: password,
      },
    );

    return data.data;
  }

  static async resetPassword(password, secret_token) {
    var data = await axios.post(
      `${config.authApi}local/new-password`,
      {
        secret_token: secret_token,
        password: password,
      },
    );
    return data.data;
  }

  static async fetchMe() {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
          query SELECTUSER {
            user_accounts(limit: 1) {
              id
              register_data
              user_id
              user {
                avatar_url
                default_role
                email
                active
                phone
                user_roles {
                  role
                }
              }
            }
          }
        `,
      });
    let data = response.data.user_accounts[0];

    data = {
      ...data,
      ...data.register_data,
      ...data.user,
    };

    delete data.register_data;
    delete data.user;

    return data;
  }

  static async isEmailConfigured() {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
          {
            authIsEmailConfigured
          }
        `,
      });

    return response.data.authIsEmailConfigured;
  }

  static async signout(refresh_token) {
    var data = await axios.post(`${config.authApi}logout`, {
      refresh_token: refresh_token,
    });
    return data;
  }

  static staticgetcurrentdate(i = 0) {
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var time =
      today.getHours() +
      ':' +
      (today.getMinutes() + i) +
      ':' +
      today.getSeconds();
    var dateTime = date + ' ' + time;

    return dateTime;
  }

  static async updateProfile(phone, avatars, password) {
    var dateTime = this.staticgetcurrentdate(2);
    const response = await graphqlClientConfig
      .config()
      .mutate({
        mutation: gql`
          mutation UPDATE_PROFILE(
            $registerdata: jsonb
            $path: jsonb
            $date: timestamptz
          ) {
            update_user_accounts(
              _set: { register_data: $registerdata }
              where: { created_at: { _is_null: false } }
            ) {
              affected_rows
            }
            update_users(
              _set: { avatar_url: $path }
              where: {}
            ) {
              affected_rows
            }
          }
        `,

        variables: {
          registerdata: {
            phone: phone,
          },
          path: avatars,
        },
      });

    return response.data;
  }

  static async updateSettingProfile(language, timezone) {
    const response = await graphqlClientConfig
      .config()
      .mutate({
        mutation: gql`
        mutation MyMutation {
          __typename
          update_account_setting(_set: {${
            typeof language === 'string' ||
            language instanceof String
              ? ''
              : 'language_code:' + language + ','
          }timezone_code: ${timezone.id}}, where: {}) {
            affected_rows
          }
        }
        `,
      })
      .catch((erreor) => {
        return 0;
      });
    return 1;
  }

  static async listDictionaryI18n() {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
          query MyQuery {
            dictionary_i18n {
              id
              label
              language
              dictionary_id
            }
          }
        `,
      });

    let responsejson = response.data.dictionary_i18n;
    let data = await responsejson.map((item, index) => {
      return {
        id: item.id,
        label: item.language,
      };
    });
    return data;
  }

  static async updatePassword(
    email,
    password,
    oldpassword,
  ) {
    let verify = await this.signinWithEmailAndPassword(
      email,
      oldpassword,
    );
    var dateTime = this.staticgetcurrentdate(2);
    const response = await graphqlClientConfig
      .config()
      .mutate({
        mutation: gql`
          mutation UPDATE_PASSWORD($date: timestamptz) {
            update_users(
              _set: { secret_token_expires_at: $date }
              where: {}
            ) {
              affected_rows
              returning {
                secret_token
              }
            }
          }
        `,

        variables: {
          date: this.staticgetcurrentdate(2),
        },
      });

    let secret_token =
      response.data.update_users.returning[0].secret_token;

    let data = await this.resetPassword(
      password,
      secret_token,
    );

    return data;
  }

  static async listAutocompleteTimeZone(value) {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
          query GetDictionaryAutocomplete($value: String) {
            dictionary(
              where: {
                type: { _eq: "TIMEZONE" }
                name: { _like: $value }
              }
            ) {
              name
              code
              id
            }
          }
        `,
        variables: {
          value: '%' + value + '%',
        },
      });

    let responsejson = response.data.dictionary;
    let data = responsejson.map((item, index) => {
      return { id: item.id, label: item.name };
    });
    return data;
  }
}
