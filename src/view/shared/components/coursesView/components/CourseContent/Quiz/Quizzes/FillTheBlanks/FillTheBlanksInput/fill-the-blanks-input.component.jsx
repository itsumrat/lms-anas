import React, { Component } from 'react'

export class FillTheBlanksInput extends Component {

    allowDrop = (e) => {
        e.preventDefault();
      };
      
    drop = (e) => {
        if (e.target.getElementsByTagName("*").length == 0) {
          e.preventDefault();
          var data = e.dataTransfer.getData("text");
          // e.target.appendChild(document.getElementById(data));
          e.target.value = document.getElementById(data).innerText
        }
      };
    render() {
        return (
            <div
              className="fill-the-blanks_input_container"
              style={this.props.fillCorrect ? { borderBottomColor: "#17D292" } : {}}
              onDrop={(e) => this.drop(e)}
              onDragOver={(e) => this.allowDrop(e)}
            >
              <input type="text"  />
              {this.props.fillCorrect ? <i className="fa fa-check-circle-o"></i> : null}
            </div>
        )
    }
}

export default FillTheBlanksInput
