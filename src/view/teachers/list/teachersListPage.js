import React, { Component } from 'react';
import TeachersListFilter from 'view/teachers/list/teachersListFilter';
import TeachersListTable from 'view/teachers/list/teachersListTable';
import TeachersListToolbar from 'view/teachers/list/teachersListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class TeachersListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.Teachers.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Teachers.list.title')}
          </PageTitle>

          <TeachersListToolbar />
          <TeachersListFilter />
          <TeachersListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(TeachersListPage);
