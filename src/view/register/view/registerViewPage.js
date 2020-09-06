import React, { Component } from "react";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import RegisterView from "view/register/view/registerView";
import { i18n } from "i18n";
import actions from "modules/register/view/registerViewActions";
import { connect } from "react-redux";
import selectors from "modules/register/view/registerViewSelectors";
import RegisterViewToolbar from "view/register/view/registerViewToolbar";

class RegisterPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n("home.menu"), "/"],
            [i18n("entities.Register.menu"), "/register"],
            [i18n("entities.Register.view.title")],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.Register.view.title")}</PageTitle>

          <RegisterViewToolbar match={this.props.match} />

          <RegisterView
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
  };
}

export default connect(select)(Layout(RegisterPage));
