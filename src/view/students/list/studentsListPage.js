import React, { Component } from 'react';
import StudentsListFilter from 'view/students/list/studentsListFilter';
import StudentsListTable from 'view/students/list/studentsListTable';
import StudentsListToolbar from 'view/students/list/studentsListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class StudentsListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.Students.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Students.list.title')}
          </PageTitle>

          <StudentsListToolbar />
          <StudentsListFilter />
          <StudentsListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(StudentsListPage);
