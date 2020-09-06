import React, {useEffect, useState} from 'react';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import './Compose.css';

export default function Compose(props) {

  function sendMessage (e) {
    console.log('sendMessage called', e)
    if(e.keyCode === 13 && e.ctrlKey) {
      e.target.value = e.target.value + '\n'
    }
    else if (e.key === 'Enter') {
      props.sendMessage(e.target.value)
      e.target.value= ''

    }
  }

  useEffect(() => {
    var textarea = document.getElementById("autosize");
if ('onpropertychange' in textarea) { // IE
  textarea.onpropertychange = adjust;
} else if ('oninput' in textarea) {
  textarea.oninput = adjust;
}
   setTimeout(adjust.bind(textarea));
  },[])
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    return (
      <div className="fixed-bottom" style={isMobile ? {left: '0px', right: '0px'} : {left: '360px', right: '25px'}}> 
      <div className="compose">
        <div style={{marginRight: '5px', marginLeft: '5px'}}>
        <ToolbarButton key="emoji" icon="ion-ios-happy" />
        </div>
        <div   style= {{padding: '10px', border: '1px solid #999', borderRadius :'30px', maxHeight: '100px',   width: '100%', background:'white'}}>
        <textarea id="autosize" placeholder="Type a message, @name"   className="compose-input" onKeyUp = {sendMessage} />
        {/* <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
        /> */}
      </div>
      <div style={{right: 0}} 
      onClick={()=>{
        props.sendMessage(document.getElementById("autosize").value) 
        document.getElementById("autosize").value = ''}}>
      {
        props.rightItems
      }
    </div>
      </div>
      </div>
    );
}

function adjust() {
  console.log('this.scrollHeight',this.scrollHeight)
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  var style = this.currentStyle || window.getComputedStyle(this);
  var boxSizing = style.boxSizing === 'border-box'
      ? parseInt(style.borderBottomWidth, 10) +
        parseInt(style.borderTopWidth, 10)
      : 0;
      console.log('this.boxSizing',this.boxSizing)

  this.style.height = '';
  this.style.height = ((this.scrollHeight-(isMobile ? 10: 20)) + boxSizing) + 'px';
};