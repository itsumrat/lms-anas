import React from 'react';
import './course-progress-popup.styles.scss';

function CourseProgressPopup(props) {
  return (
    <>
      <div
        className="course-progress-back"
        style={
          props.courseProgress
            ? { opacity: '1', pointerEvents: 'visible' }
            : {}
        }
      ></div>
      <div
        className="course-progress-popup"
        style={
          props.courseProgress
            ? { opacity: '1', pointerEvents: 'visible' }
            : {}
        }
      >
        <i
          className="fa fa-times-circle mb-3"
          aria-hidden="true"
          onClick={() =>
            props.showProgressPopup({
              courseProgress: false,
            })
          }
        ></i>

        <div className="course-score_container d-flex justify-content-center align-items-center">
          <img
            className="mr-2"
            src="https://stylemixthemes.com/masterstudy/academy/wp-content/plugins/masterstudy-lms-learning-management-system//assets/img/faces/kissing.svg"
            alt=""
          />
          <div className="course-score">
            <h5 className="course-score_header">
              Your score
            </h5>
            <h2 className="score">100%</h2>
          </div>
        </div>
        <h5 className="successfully-completed-course my-4">
          You have successfully completed the course
        </h5>
        <h2 className="universal-course mb-4">
          Universal Course
        </h2>
        <div className="course-completion-details">
          <div className="d-flex">
            <div className="media completion-detail">
              <i className="fa fa-play-circle"></i>
              <h5 className="completion-text">
                Media: <span className="score">5/5</span>
              </h5>
            </div>
            <div className="pages completion-detail">
              <i className="fa fa-file-text-o"></i>
              <h5 className="completion-text">
                Pages: <span className="score">5/5</span>
              </h5>
            </div>
          </div>
          <div className="d-flex">
            <div className="quizzes completion-detail">
              <i className="fa fa-question-circle-o"></i>
              <h5 className="completion-text">
                Quizzes: <span className="score">5/5</span>
              </h5>
            </div>
            <div className="assignments completion-detail">
              <i className="fa fa-check-square-o"></i>
              <h5 className="completion-text">
                Assignments:{' '}
                <span className="score">5/5</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseProgressPopup;
