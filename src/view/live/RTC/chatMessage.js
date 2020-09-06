import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  Chat,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage,
} from 'react-chat-popup';
import {
  RTCMultiConnection,
  DetectRTC,
} from 'rtcmulticonnection';

export default class ChatMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let { connection } = this.props;
    connection.onmessage = function (e) {
      let fullname = e.extra.fullName;
      let data = e.data;
      addResponseMessage(`${fullname} : ${data}`);
    };
  }

  handleNewUserMessage = (newMessage) => {
    let { connection } = this.props;

    connection.send(newMessage);
  };
  render() {
    return (
      <Chat
        handleNewUserMessage={this.handleNewUserMessage}
        // profileAvatar={logo}
        title="Chat du Groupe"
        subtitle=""
      />
    );
  }
}
