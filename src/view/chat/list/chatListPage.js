import React, { Component } from 'react';
import ChatListFilter from 'view/chat/list/chatListFilter';
import ChatListTable from 'view/chat/list/chatListTable';
import ChatListToolbar from 'view/chat/list/chatListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import { connect } from 'react-redux';
import 'view/shared/components/chat/assets/index.css';
import Messenger from 'view/shared/components/chat/components/Messenger';

class ChatListPage extends Component {
  render() {
    return (
      <Messenger />
      // <React.Fragment>
      //   <Breadcrumb
      //     items={[
      //       [i18n('home.menu'), '/'],
      //       [i18n('entities.Chat.menu')],
      //     ]}
      //   />

      //   <ContentWrapper>
      //     <PageTitle>
      //       {i18n('entities.Chat.list.title')}
      //     </PageTitle>

      //     <ChatListToolbar />
      //     <ChatListFilter />
      //     <ChatListTable />
      //   </ContentWrapper>
      // </React.Fragment>
    );
  }
}

function select(state) {
  var currentUser = state.auth.currentUser;
  return {
    currentUser,
  };
}

export default connect(select)(ChatListPage);
