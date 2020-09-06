import React, { Component } from 'react';
import ClassroomTeacherMatterListFilter from 'view/classroomTeacherMatter/list/classroomTeacherMatterListFilter';
import ClassroomTeacherMatterListTable from 'view/classroomTeacherMatter/list/classroomTeacherMatterListTable';
import ClassroomTeacherMatterListToolbar from 'view/classroomTeacherMatter/list/classroomTeacherMatterListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ClassroomTeacherMatterListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.ClassroomTeacherMatter.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.ClassroomTeacherMatter.list.title')}
          </PageTitle>

          <ClassroomTeacherMatterListToolbar />
          <ClassroomTeacherMatterListFilter />
          <ClassroomTeacherMatterListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(ClassroomTeacherMatterListPage);
