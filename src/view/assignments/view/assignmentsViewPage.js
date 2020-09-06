import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import AssignmentsView from 'view/assignments/view/assignmentsView';
import { i18n } from 'i18n';
import actions from 'modules/assignments/view/assignmentsViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/assignments/view/assignmentsViewSelectors';
import AssignmentsViewToolbar from 'view/assignments/view/assignmentsViewToolbar';

class AssignmentsPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [
              i18n('entities.Assignments.menu'),
              '/assignments',
            ],
            [i18n('entities.Assignments.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Assignments.view.title')}
          </PageTitle>

          <AssignmentsViewToolbar
            match={this.props.match}
          />

          <AssignmentsView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
    currentUser: state.auth.currentUser,
  };
}

export default connect(select)(Layout(AssignmentsPage));
