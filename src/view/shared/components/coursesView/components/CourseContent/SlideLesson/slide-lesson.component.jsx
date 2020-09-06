import React, { Component } from 'react';
import './slide-lesson.styles.scss';
import CourseFooter from '../../CourseFooter/course-footer.component';

export class SlideLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  render() {
    const { selectedIndex } = this.state;
    return (
      <div
        className={`slide-lesson ${
          this.props.toggleRightSidebar
            ? 'ml-auto mr-5'
            : 'mx-auto'
        }`}
      >
        <div className="section-title-and-lecture">
          <h5>
            {this.props.sectionType}, Lecture{' '}
            {this.props.lectureNo}{' '}
          </h5>
        </div>
        <h2 className="section-content-title">
          {this.props.sectionHead}
        </h2>

        <div className="slider-images_container">
          <iframe
            src="https://onedrive.live.com/embed?cid=2D70A5A39C34FD1A&amp;resid=2D70A5A39C34FD1A%21106&amp;authkey=APYU06mFzR4ohIw&amp;em=2&amp;wdAr=1.7777777777777777"
            width="100%"
            height="auto"
            frameborder="0"
          >
            This is an embedded{' '}
            <a target="_blank" href="https://office.com">
              Microsoft Office
            </a>{' '}
            presentation, powered by{' '}
            <a
              target="_blank"
              href="https://office.com/webapps"
            >
              Office
            </a>
            .
          </iframe>
        </div>

        <p className="section-content-description mt-2">
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Illo temporibus non odio
          molestias quo excepturi delectus dolorum, in ipsa
          omnis beatae consectetur dolor ab laudantium rerum
          praesentium animi minus sed iusto ullam laboriosam
          fugit eius porro quasi. Doloremque aspernatur,
          cupiditate, aut animi excepturi alias dicta amet
          ipsa, vitae reiciendis quasi?
        </p>
        <p className="section-content-description">
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Illo temporibus non odio
          molestias quo excepturi delectus dolorum, in ipsa
          omnis beatae consectetu.
        </p>
        <p className="section-content-description">
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Illo temporibus non odio
          molestias quo excepturi delectus dolorum, in ipsa
          omnis beatae consectetur dolor ab laudantium rerum
          praesentium animi minus sed iusto ullam laboriosam
          fugit eius porro quasi. Doloremque aspernatur,
          cupiditate, aut animi excepturi alias dicta amet
          ipsa, vitae reiciendis quasi?
        </p>

        {/* <CourseFooter color="#000" /> */}
      </div>
    );
  }
}

export default SlideLesson;
