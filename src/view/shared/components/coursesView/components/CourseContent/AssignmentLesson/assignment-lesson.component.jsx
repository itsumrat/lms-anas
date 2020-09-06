import React, { Component } from 'react';
import './assignment-lesson.styles.scss';
import CourseFooter from '../../CourseFooter/course-footer.component';
import TextEditor from '../../TextEditor/text-editor.component';
import fileUpload from 'modules/shared/upload/upload';

export class AssignmentLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAssignment: false,
      showRequirements: true,
      sendAttachments: false,
      attachments: '',
    };
  }
  render() {
    const {
      startAssignment,
      showRequirements,
      sendAttachments,
      attachments,
    } = this.state;
    var { assignement } = this.props;
    return (
      <div
        className={`assignment-lesson d-flex flex-column justify-content-start align-items-start ${
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

        {true ? (
          <>
            {true ? (
              <a
                href={fileUpload.getPath(assignement)}
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ showRequirements: true });
                }}
                className="show-requirements-btn d-block mt-4 mb-2"
              >
                All Requirements
                <i className="fa fa-angle-down ml-1"></i>
              </a>
            ) : null}
            {showRequirements ? (
              <div className="assignment-requirements mt-2">
                <p>
                  Dear students, you can send your homework
                  in this lesson
                </p>
                <p>Maximum upload size is 4 MB.</p>
                <p>Have a good time.</p>
              </div>
            ) : null}

            {startAssignment ? (
              <div className="text-editor_container">
                <TextEditor
                  setAttachments={(obj) =>
                    this.setState(obj)
                  }
                />
                <div className="attach-files-btn_container mt-3">
                  <button className="attach-files-btn text-uppercase">
                    {' '}
                    <i className="fa fa-paperclip mr-1"></i>{' '}
                    Attach Files
                  </button>
                  <input type="file" />
                </div>
              </div>
            ) : null}
            {startAssignment ? (
              <button
                onClick={() =>
                  this.setState({ sendAttachments: true })
                }
                className="send-attachments-btn text-uppercase align-self-center mt-4"
              >
                Send Attachments
              </button>
            ) : (
              <button
                onClick={() =>
                  this.setState({
                    startAssignment: true,
                    showRequirements: false,
                  })
                }
                className="assignment-start-btn text-uppercase mt-2"
              >
                Start Now
              </button>
            )}
          </>
        ) : (
          <div className="attachments-sent mt-3">
            <div className="assignment-pending_container">
              <div className="hour-glass_container mr-2">
                <i className="fa fa-hourglass-end"></i>
              </div>
              <p className="assignment-pending-text m-0">
                Your assignment pending review
              </p>
            </div>
            <div className="attachments_container mt-3">
              <div>
                <p className="attachments m-0">
                  {attachments}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* <CourseFooter /> */}
      </div>
    );
  }
}

export default AssignmentLesson;
