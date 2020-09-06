import React, { Component } from "react";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import SchoolYearView from "view/schoolYear/view/schoolYearView";
import { i18n } from "i18n";
import actions from "modules/schoolYear/view/schoolYearViewActions";
import { connect } from "react-redux";
import selectors from "modules/schoolYear/view/schoolYearViewSelectors";
import SchoolYearViewToolbar from "view/schoolYear/view/schoolYearViewToolbar";

class SchoolYearPage extends Component {
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
            [i18n("entities.SchoolYear.menu"), "/schoolYear"],
            [i18n("entities.SchoolYear.view.title")],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.SchoolYear.view.title")}</PageTitle>

          <SchoolYearViewToolbar match={this.props.match} />

          <SchoolYearView
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

export default connect(select)(Layout(SchoolYearPage));
