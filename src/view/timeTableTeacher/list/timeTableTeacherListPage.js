import React, { Component } from 'react';
import TimeTableTeacherListFilter from 'view/timeTableTeacher/list/timeTableTeacherListFilter';
import TimeTableTeacherListTable from 'view/timeTableTeacher/list/timeTableTeacherListTable';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import { connect } from 'react-redux';
class TimeTableTeacherListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.TimeTableTeacher.menu')],
          ]}
        />
        <ContentWrapper>
          <PageTitle>
            {i18n('entities.TimeTableTeacher.list.title')}
          </PageTitle>
          <TimeTableTeacherListFilter />
          <TimeTableTeacherListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  var currentUser = state.auth.currentUser;
  return {
    currentUser,
  };
}

export default connect(select)(
  Layout(TimeTableTeacherListPage),
);
