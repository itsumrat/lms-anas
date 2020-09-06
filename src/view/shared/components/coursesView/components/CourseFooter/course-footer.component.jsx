import React from 'react';
import './course-footer.styles.scss';
import { Link } from 'react-router-dom';

function CourseFooter(props) {
  return (
    <div className="course-footer">
      <Link
        to={`/courseStudents`}
        style={props.color ? { color: props.color } : {}}
      >
        <i className="fa fa-arrow-left"></i>
        <span className="prev-lesson text-uppercase">
          Prev Lesson
        </span>
      </Link>
      <button
        style={props.color ? { color: props.color } : {}}
      >
        Complete
      </button>
      <Link
        to={`/courseStudents`}
        style={props.color ? { color: props.color } : {}}
      >
        <span className="next-lesson text-uppercase">
          Next Lesson
        </span>
        <i className="fa fa-arrow-right"></i>
      </Link>
    </div>
  );
}

export default CourseFooter;
