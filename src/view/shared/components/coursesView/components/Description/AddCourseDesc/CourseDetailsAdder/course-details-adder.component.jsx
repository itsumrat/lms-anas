import React, { Component } from 'react';
import './course-details-adder.styles.scss';

export class CourseDetailsAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: '',
    };
  }
  render() {
    const { titleValue } = this.state;

    return (
      <div className="course-details-adder py-3 px-3 mt-4">
        <div className="course-file-title_header mb-3 d-flex justify-content-between align-items-center">
          <h5 className="course-file-title m-0">
            {this.props.title1}
          </h5>
          <i
            className="fa fa-trash"
            // onClick={() =>
            //   this.props.setRemoveIndex({
            //     courseFile: this.props.courseFile.filter((val, i) => (val.id != this.props.removeIndex)),
            //   })
            // }
          ></i>
        </div>
        <input
          className="course-title-input mb-3"
          type="text"
          value={titleValue}
          placeholder={
            this.props.placeholder1
              ? this.props.placeholder1
              : ''
          }
          onChange={(e) =>
            this.setState({ titleValue: e.target.value })
          }
        />

        <div className="upload-course-file_header mb-3 d-flex justify-content-between align-items-center">
          <h5 className="upload-course-file m-0">
            {this.props.title2}
          </h5>
        </div>

        {!this.props.FAQ ? (
          <div className="choose-file-btn d-flex justify-content-center align-items-center">
            <input type="file" name="" id="" />
            <i className="fa fa-paperclip mr-2"></i>
            <h5 className="choose-file text-uppercase m-0">
              Choose File
            </h5>
          </div>
        ) : (
          <textarea
            className="faq-answer"
            name=""
            id=""
            placeholder={
              this.props.placeholder1
                ? this.props.placeholder2
                : ''
            }
          ></textarea>
        )}
      </div>
    );
  }
}

export default CourseDetailsAdder;
