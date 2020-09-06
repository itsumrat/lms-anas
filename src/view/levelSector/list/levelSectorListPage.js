import React, { Component } from 'react';
import LevelSectorListFilter from 'view/levelSector/list/levelSectorListFilter';
import LevelSectorListTable from 'view/levelSector/list/levelSectorListTable';
import LevelSectorListToolbar from 'view/levelSector/list/levelSectorListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class LevelSectorListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.LevelSector.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.LevelSector.list.title')}
          </PageTitle>

          <LevelSectorListToolbar />
          <LevelSectorListFilter />
          <LevelSectorListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(LevelSectorListPage);
