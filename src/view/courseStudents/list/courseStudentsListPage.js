import React, { Component } from 'react';
import Permissions from 'security/permissions';
import PermissionChecker from 'modules/auth/permissionChecker';
import Layout from 'view/layout/Layout';

import { i18n } from 'i18n';
import { connect } from 'react-redux';
import CourseStudentsListFilter from 'view/courseStudents/list/courseStudentsListFilter';
import authSelectors from 'modules/auth/authSelectors';
import CourseStudentsListTable from 'view/courseStudents/list/courseStudentsListTable';

class CourseStudentsListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="course">
          <CourseStudentsListFilter />
          <CourseStudentsListTable />
        </div>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    currentUser: authSelectors.selectCurrentUser(state),
  };
}

export default connect(select)(
  Layout(CourseStudentsListPage),
);
