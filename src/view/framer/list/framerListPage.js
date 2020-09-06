import React, { Component } from 'react';
import FramerListFilter from 'view/framer/list/framerListFilter';
import FramerListTable from 'view/framer/list/framerListTable';
import FramerListToolbar from 'view/framer/list/framerListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class FramerListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.Framer.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Framer.list.title')}
          </PageTitle>

          <FramerListToolbar />
          <FramerListFilter />
          <FramerListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(FramerListPage);
