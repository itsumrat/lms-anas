import React, {useState, useEffect} from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';

export default function Messenger(props) {

  const [isMobile, setMobile] = useState(false);
  
  function selectListItem() {
    console.log('selectListItem called')
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    setMobile(isMobile)
    console.log('isMobile', isMobile)
  }

   var isWeb = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
   console.log('isWeb',isWeb)

    return (
      <div className="messenger" style={!isWeb ? {display:"grid"}: {display:"list-item"}}>
        {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        /> */}

        {/* <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        /> */}
         {!isMobile && 
        <div className="scrollable sidebar">
          <ConversationList selectListItem= {selectListItem}/>
        </div>
       }
       { (!isWeb || isMobile) &&
        <div className="scrollable content"  style= {{overflowY:"hidden"}}>
          <MessageList setMobileView= {setMobile} isMobile={isMobile}/>
        </div>
      }
      </div>
      
    );
}