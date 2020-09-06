import React, { Component } from 'react';
import SectorListFilter from 'view/sector/list/sectorListFilter';
import SectorListTable from 'view/sector/list/sectorListTable';
import SectorListToolbar from 'view/sector/list/sectorListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class SectorListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.Sector.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Sector.list.title')}
          </PageTitle>

          <SectorListToolbar />
          <SectorListFilter />
          <SectorListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(SectorListPage);
