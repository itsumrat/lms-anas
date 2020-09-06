import React, { Component } from 'react';
import RoomsessionListFilter from 'view/roomsession/list/roomsessionListFilter';
import RoomsessionListTable from 'view/roomsession/list/roomsessionListTable';
import RoomsessionListToolbar from 'view/roomsession/list/roomsessionListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class RoomsessionListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.Roomsession.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Roomsession.list.title')}
          </PageTitle>

          <RoomsessionListToolbar />
          <RoomsessionListFilter />
          <RoomsessionListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(RoomsessionListPage);
