import React, { Component } from 'react';
import './course-sidebar.styles.scss';
import Section from './Section/section.component';
import CourseProgress from './CourseProgress/course-progress.component';
import CourseProgressPopup from '../Popups/CourseProgress/course-progress-popup.component';
import RightPanel from '../RightPanel/right-panel.component';
import SectionData from './Section/sectionData.component';

const sections = [
  {
    sectionNumber: '1',
    sectionType: 'matter1',
    sectionName: 'Introduction',
    element: [
      {
        dataNumber: '1',
        dataType: 'Introduction',
        content: [
          'Realistic Graphic on...',
          'Nvidea New Technol...',
        ],
      },
      {
        dataNumber: '2',
        dataType: 'Lesson Types',
        content: [
          'Text Lesson Design...',
          'Live Stream Lesson',
          'Quiz: Mobile / Native...',
          'Slide Lesson GPU for...',
          'Video Lesson Engin...',
        ],
      },
      {
        dataNumber: '3',
        dataType: 'Quizzes & Assignments',
        content: [
          'Ray Tracing',
          'Assignment Lesson',
          'Final Middle Quiz',
        ],
      },
    ],
  },
  {
    sectionNumber: '2',
    sectionType: 'Matter 2',
    sectionName: 'Lesson Types',
    element: [
      {
        dataNumber: '1',
        dataType: 'Lesson Types',
        content: [
          'Text Lesson Design...',
          'Live Stream Lesson',
          'Quiz: Mobile / Native...',
          'Slide Lesson GPU for...',
          'Video Lesson Engin...',
        ],
      },
    ],
  },
  {
    sectionNumber: '3',
    sectionType: 'Matter 3',
    sectionName: 'Quizzes & Assignments',
    element: [
      {
        dataNumber: '1',
        dataType: 'Quizzes & Assignments',
        content: [
          'Ray Tracing',
          'Assignment Lesson',
          'Final Middle Quiz',
        ],
      },
    ],
  },
];

export class CourseSidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { rows } = this.props;
    return (
      <div className="course-sidebar">
        <div className="course-sidebar-header_container">
          <h5 className="course-sidebar-header text-uppercase">
            Section Cours
          </h5>
        </div>

        <div className="sections_container">
          {rows.map((item, index) => {
            return (
              <div
                key={index}
                className="section_container"
              >
                <SectionData
                  id={index}
                  name={item.name}
                  data={item.elements}
                  {...this.props}
                />
              </div>
            );
          })}
        </div>

        {/* <CourseProgress
          showProgressPopup={this.props.setToPlay}
        /> */}
      </div>
    );
  }
}

export default CourseSidebar;
