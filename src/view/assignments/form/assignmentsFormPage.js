import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import AssignmentsForm from 'view/assignments/form/assignmentsForm';
import { i18n } from 'i18n';
import { connect } from 'react-redux';

class AssignmentsFormPage extends Component {
  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  title = () => {
    return this.isEditing()
      ? i18n('entities.Assignments.edit.title')
      : i18n('entities.Assignments.new.title');
  };

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
            [this.title()],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{this.title()}</PageTitle>

          <AssignmentsForm match={this.props.match} />
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

export default connect(select)(Layout(AssignmentsFormPage));
