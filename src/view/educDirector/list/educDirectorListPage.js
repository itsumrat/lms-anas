import React, { Component } from 'react';
import EducDirectorListFilter from 'view/educDirector/list/educDirectorListFilter';
import EducDirectorListTable from 'view/educDirector/list/educDirectorListTable';
import EducDirectorListToolbar from 'view/educDirector/list/educDirectorListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class EducDirectorListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.EducDirector.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.EducDirector.list.title')}
          </PageTitle>

          <EducDirectorListToolbar />
          <EducDirectorListFilter />
          <EducDirectorListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(EducDirectorListPage);
