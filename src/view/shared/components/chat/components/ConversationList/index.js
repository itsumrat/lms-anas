import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';

import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    getConversations()
  },[])

 const getConversations = () => {
    axios.get('https://randomuser.me/api/?results=20').then(response => {
        let newConversations = response.data.results.map(result => {
          return {
            photo: result.picture.large,
            name: `${result.name.first} ${result.name.last}`,
            text: 'Hello world! This is a long message that needs to be truncated.'
          };
        });
        setConversations([...conversations, ...newConversations])
    });
  }

    return (
      <div className="conversation-list">
        <div style={{padding: 10}}>
        <Toolbar
          title="Messenger"
          leftItems={[
            // <ToolbarButton key="cog" icon="ion-ios-cog" />

            <a href="/">
              <i className="fa fa-arrow-circle-left" style= {props.isMobile ? {fontSize: 28, color: "#007aff", cursor: 'pointer'}: {fontSize: 36, color: "blue", cursor: 'pointer'}}></i>
            </a>
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        </div>
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
              selectListItem = {props.selectListItem}
            />
          )
        }
      </div>
    );
}