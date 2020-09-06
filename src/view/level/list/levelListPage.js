import React, { Component } from 'react';
import LevelListFilter from 'view/level/list/levelListFilter';
import LevelListTable from 'view/level/list/levelListTable';
import LevelListToolbar from 'view/level/list/levelListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class LevelListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.Level.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Level.list.title')}
          </PageTitle>

          <LevelListToolbar />
          <LevelListFilter />
          <LevelListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(LevelListPage);
