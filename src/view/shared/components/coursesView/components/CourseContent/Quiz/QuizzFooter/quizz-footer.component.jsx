import React from 'react';
import './quizz-footer.styles.scss';
import { Link } from 'react-router-dom';

function QuizzFooter(props) {
  return (
    <div className="quizz-footer">
      <Link to={`/courseStudents`}>
        <i className="fa fa-arrow-left"></i>
        <span className="prev-lesson text-uppercase">
          Prev Lesson
        </span>
      </Link>
      <button className="d-flex justify-content-center align-items-center">
        <i
          className="fa fa-check-circle-o mr-2"
          aria-hidden="true"
        ></i>
        passed
      </button>
      <Link to={`/courseStudents`}>
        <span className="next-lesson text-uppercase">
          Next Lesson
        </span>
        <i className="fa fa-arrow-right"></i>
      </Link>
    </div>
  );
}

export default QuizzFooter;
