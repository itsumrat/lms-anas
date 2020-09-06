import React, { Component } from 'react';
import EducDirectorCycleListFilter from 'view/educDirectorCycle/list/educDirectorCycleListFilter';
import EducDirectorCycleListTable from 'view/educDirectorCycle/list/educDirectorCycleListTable';
import EducDirectorCycleListToolbar from 'view/educDirectorCycle/list/educDirectorCycleListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class EducDirectorCycleListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.EducDirectorCycle.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.EducDirectorCycle.list.title')}
          </PageTitle>

          <EducDirectorCycleListToolbar />
          <EducDirectorCycleListFilter />
          <EducDirectorCycleListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(EducDirectorCycleListPage);
