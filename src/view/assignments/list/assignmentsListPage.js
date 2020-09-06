import React, { Component } from 'react';
import AssignmentsListFilter from 'view/assignments/list/assignmentsListFilter';
import AssignmentsListTable from 'view/assignments/list/assignmentsListTable';
import AssignmentsListToolbar from 'view/assignments/list/assignmentsListToolbar';
import AssignmentsListShow from 'view/assignments/list/assignmentsListShow';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import { connect } from 'react-redux';

class AssignmentsListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.Assignments.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Assignments.list.title')}
          </PageTitle>

          <AssignmentsListToolbar />
          <AssignmentsListFilter />
          <AssignmentsListShow />
          {/* <AssignmentsListTable /> */}
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

export default connect(select)(Layout(AssignmentsListPage));
