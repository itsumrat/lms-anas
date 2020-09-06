import React, { Component } from 'react';
import './text-only.styles.scss';
import CourseFooter from '../../CourseFooter/course-footer.component';
import ReactHtmlParser from 'react-html-parser';

export class TextOnly extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { htmlString } = this.props;
    return (
      <div
        className={`text-only ${
          this.props.toggleRightSidebar
            ? 'ml-auto mr-5'
            : 'mx-auto'
        }`}
      >
        <div className="section-title-and-lecture">
          {/* <h5>
            {this.props.sectionType} | Lecture{' '}
            {this.props.lectureNo}{' '}
          </h5> */}
        </div>
        <h2 className="section-content-title">
          {this.props.sectionHead}
        </h2>
        <div>{ReactHtmlParser(htmlString)}</div>

        {/* <CourseFooter color={'#000'} /> */}
      </div>
    );
  }
}

export default TextOnly;
