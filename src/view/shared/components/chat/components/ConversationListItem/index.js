import React, {useEffect} from 'react';
import shave from 'shave';

import './ConversationListItem.css';

export default function ConversationListItem(props) {
  useEffect(() => {
    console.log('window.innerWidth', window.innerWidth)
    shave('.conversation-snippet', 17)
  })

    const { photo, name, text } = props.data;

    return (
      <div className="conversation-list-item" onClick={()=>{props.selectListItem()}}>
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ name }</h1>
          <p className="conversation-snippet">{ text }</p>
        </div>
      </div>
    );
}