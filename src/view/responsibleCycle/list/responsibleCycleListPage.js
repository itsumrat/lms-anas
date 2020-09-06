import React, { Component } from 'react';
import ResponsibleCycleListFilter from 'view/responsibleCycle/list/responsibleCycleListFilter';
import ResponsibleCycleListTable from 'view/responsibleCycle/list/responsibleCycleListTable';
import ResponsibleCycleListToolbar from 'view/responsibleCycle/list/responsibleCycleListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ResponsibleCycleListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.ResponsibleCycle.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.ResponsibleCycle.list.title')}
          </PageTitle>

          <ResponsibleCycleListToolbar />
          <ResponsibleCycleListFilter />
          <ResponsibleCycleListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(ResponsibleCycleListPage);
