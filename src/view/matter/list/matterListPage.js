import React, { Component } from 'react';
import MatterListFilter from 'view/matter/list/matterListFilter';
import MatterListTable from 'view/matter/list/matterListTable';
import MatterListToolbar from 'view/matter/list/matterListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class MatterListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.Matter.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Matter.list.title')}
          </PageTitle>

          <MatterListToolbar />
          <MatterListFilter />
          <MatterListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(MatterListPage);
