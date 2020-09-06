import React, { Component } from 'react';
// import AssignmentsStudentsListFilter from 'view/assignmentsStudents/list/assignmentsStudentsListFilter';
// import AssignmentsStudentsListTable from 'view/assignmentsStudents/list/assignmentsStudentsListTable';
// import AssignmentsStudentsListToolbar from 'view/assignmentsStudents/list/assignmentsStudentsListToolbar';
import AssignmentsStudentsListShow from 'view/students/assignmentsStudents/assignmentsStudentsListShow';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import actions from 'modules/students/assignmentsStudents/assignmentsStudentsActions';
import { i18n } from 'i18n';
import { connect } from 'react-redux';

class AssignmentsStudentsListPage extends Component {
  componentDidMount() {
    var { dispatch } = this.props;
    dispatch(actions.DoListMattersStudents());
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.AssignmentsStudents.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n(
              'entities.AssignmentsStudents.list.title',
            )}
          </PageTitle>

          <AssignmentsStudentsListShow />

          {/* <AssignmentsStudentsListToolbar />
          <AssignmentsStudentsListFilter />
          <AssignmentsStudentsListTable /> */}
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default connect()(
  Layout(AssignmentsStudentsListPage),
);
