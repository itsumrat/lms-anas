import React, { Component } from 'react';
import ResponsiblesListFilter from 'view/responsibles/list/responsiblesListFilter';
import ResponsiblesListTable from 'view/responsibles/list/responsiblesListTable';
import ResponsiblesListToolbar from 'view/responsibles/list/responsiblesListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ResponsiblesListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.Responsibles.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Responsibles.list.title')}
          </PageTitle>

          <ResponsiblesListToolbar />
          <ResponsiblesListFilter />
          <ResponsiblesListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(ResponsiblesListPage);
