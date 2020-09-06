import React, { Component } from "react";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import ElementView from "view/element/view/elementView";
import { i18n } from "i18n";
import actions from "modules/element/view/elementViewActions";
import { connect } from "react-redux";
import selectors from "modules/element/view/elementViewSelectors";
import ElementViewToolbar from "view/element/view/elementViewToolbar";

class ElementPage extends Component {
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
            [i18n("entities.Element.menu"), "/element"],
            [i18n("entities.Element.view.title")],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.Element.view.title")}</PageTitle>

          <ElementViewToolbar match={this.props.match} />

          <ElementView
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

export default connect(select)(Layout(ElementPage));
