import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ProfileForm from 'view/auth/ProfileForm';
import { connect } from 'react-redux';
import { i18n } from 'i18n';

class ProfileFormPage extends Component {
  render() {
    let { currentUser } = this.props;
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('auth.profile.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('auth.profile.title')}
          </PageTitle>

          <ProfileForm />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  var currentUser = state.auth.currentUser;
  return {
    currentUser,
  };
}

export default connect(select)(Layout(ProfileFormPage));
