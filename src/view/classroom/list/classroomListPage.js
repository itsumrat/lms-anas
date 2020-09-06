import React, { Component } from 'react';
import ClassroomListFilter from 'view/classroom/list/classroomListFilter';
import ClassroomListTable from 'view/classroom/list/classroomListTable';
import ClassroomListToolbar from 'view/classroom/list/classroomListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ClassroomListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.Classroom.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Classroom.list.title')}
          </PageTitle>

          <ClassroomListToolbar />
          <ClassroomListFilter />
          <ClassroomListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(ClassroomListPage);
