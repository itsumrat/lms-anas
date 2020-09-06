import React, { Component } from "react";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import WeekView from "view/week/view/weekView";
import { i18n } from "i18n";
import actions from "modules/week/view/weekViewActions";
import { connect } from "react-redux";
import selectors from "modules/week/view/weekViewSelectors";
import WeekViewToolbar from "view/week/view/weekViewToolbar";

class WeekPage extends Component {
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
            [i18n("entities.Week.menu"), "/week"],
            [i18n("entities.Week.view.title")],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.Week.view.title")}</PageTitle>

          <WeekViewToolbar match={this.props.match} />

          <WeekView loading={this.props.loading} record={this.props.record} />
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

export default connect(select)(Layout(WeekPage));
