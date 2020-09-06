import React, { Component } from "react";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import ChatView from "view/chat/view/chatView";
import { i18n } from "i18n";
import actions from "modules/chat/view/chatViewActions";
import { connect } from "react-redux";
import selectors from "modules/chat/view/chatViewSelectors";
import ChatViewToolbar from "view/chat/view/chatViewToolbar";

class ChatPage extends Component {
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
            [i18n("entities.Chat.menu"), "/Chat"],
            [i18n("entities.Chat.view.title")],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.Chat.view.title")}</PageTitle>

          <ChatViewToolbar match={this.props.match} />

          <ChatView loading={this.props.loading} record={this.props.record} />
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

export default connect(select)(Layout(ChatPage));
