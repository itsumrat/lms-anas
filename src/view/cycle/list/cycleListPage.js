import React, { Component } from 'react';
import CycleListFilter from 'view/cycle/list/cycleListFilter';
import CycleListTable from 'view/cycle/list/cycleListTable';
import CycleListToolbar from 'view/cycle/list/cycleListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class CycleListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.Cycle.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Cycle.list.title')}
          </PageTitle>

          <CycleListToolbar />
          <CycleListFilter />
          <CycleListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(CycleListPage);
