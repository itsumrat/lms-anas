import React, { Component } from "react";
import "./drop-input.styles.scss";

export class DropInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      titleValue: "",
    };
  }
  render() {
    const { showDropdown, titleValue } = this.state;
    return (
      <div
        className="drop-input_container"
        style={this.props.zIndex ? { zIndex: this.props.zIndex } : {}}
        tabIndex="1"
        autoFocus={showDropdown ? true : false}
        onClick={() => this.input.focus()}
        onFocus={() => this.setState({ showDropdown: true })}
        onBlur={() => this.setState({ showDropdown: false })}
      >
        <div className="title_container d-flex align-items-center justify-content-between">
          <h2
            className="title m-0"
            style={
              this.props.titleSize
                ? {
                    fontSize: this.props.titleSize,
                    opacity: this.props.opacity,
                    padding: this.props.titleKeyPadding,
                  }
                : {}
            }
          >
            {!this.props.noPlaceHolder ? (
              titleValue ? (
                titleValue
              ) : (
                "Your Course title here..."
              )
            ) : (
              <>
                {this.props.titleKey}: <b> {titleValue}</b>
              </>
            )}
          </h2>
          {this.props.icon ? (
            <i
              className={`fa fa-${this.props.icon}`}
              style={{
                fontSize: this.props.iconSize,
                padding: this.props.iconPadding,
                color: this.props.iconColor,
              }}
            ></i>
          ) : null}
        </div>
        <div
          className="dropdown-input py-4 px-3"
          style={
            showDropdown
              ? { opacity: "1", pointerEvents: "visible" }
              : { opacity: "0", pointerEvents: "none" }
          }
        >
          <lable className="input-title mb-2">
            {!this.props.noPopupTitle ? "Course title" : ""}
          </lable>
          <input
            type="text"
            ref={(ref) => (this.input = ref)}
            value={titleValue}
            onChange={(e) => this.setState({ titleValue: e.target.value })}
            style={this.props.padding ? { padding: this.props.padding } : {}}
          />
        </div>
      </div>
    );
  }
}

export default DropInput;
