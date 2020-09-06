import React, { Component } from 'react';
import ParentListFilter from 'view/parent/list/parentListFilter';
import ParentListTable from 'view/parent/list/parentListTable';
import ParentListToolbar from 'view/parent/list/parentListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ParentListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.Parent.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Parent.list.title')}
          </PageTitle>

          <ParentListToolbar />
          <ParentListFilter />
          <ParentListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(ParentListPage);
