import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import AccountSettingPage from 'view/auth/AccountSettingPage';
import { i18n } from 'i18n';

class AccountSeting extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('auth.accountSeting.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('auth.accountSeting.title')}
          </PageTitle>

          <AccountSettingPage />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(AccountSeting);
