import React, { Component } from 'react';
import FramerMatterCycleListFilter from 'view/framerMatterCycle/list/framerMatterCycleListFilter';
import FramerMatterCycleListTable from 'view/framerMatterCycle/list/framerMatterCycleListTable';
import FramerMatterCycleListToolbar from 'view/framerMatterCycle/list/framerMatterCycleListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class FramerMatterCycleListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.FramerMatterCycle.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.FramerMatterCycle.list.title')}
          </PageTitle>

          <FramerMatterCycleListToolbar />
          <FramerMatterCycleListFilter />
          <FramerMatterCycleListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(FramerMatterCycleListPage);
