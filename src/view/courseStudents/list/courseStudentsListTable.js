import React, { Component } from 'react';
import Permissions from 'security/permissions';
import PermissionChecker from 'modules/auth/permissionChecker';
import Layout from 'view/layout/Layout';
import selectors from 'modules/courseStudents/list/courseStudentsListSelectors';
import coursStudentSelectors from 'modules/courseStudents/courseStudentsSelectors';
import authSelectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import { connect } from 'react-redux';
import CourseContent from 'view/shared/components/coursesView/components/CourseContent/course-content.component';
import CourseSidebar from 'view/shared/components/coursesView/components/CourseSidebar/course-sidebar.component';
import actions from 'modules/courseStudents/list/courseStudentsListActions';
import './course.styles.scss';
import FilterWrapper, {
  formItemLayout,
} from 'view/shared/styles/FilterWrapper';

import { Select, Col, Form, Row, Button } from 'antd';

const { Option } = Select;

const permissions = Permissions.values;

class CourseStudentsListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightSidebar: window.innerWidth <= 768 ? false : true,
      questionsSidebar: false,
      toPlay: 'Realistic Graphic on...',
      sectionHead: 'Realistic Graphic on...',
      lectureNo: 1,
      sectionType: 'Introduction',
      courseProgress: false,
      currentAssignement: null,
    };
  }
  componentWillMount = () => {
    var { dispatch } = this.props;
    console.log('Heeeeeeeeeeeeey');
    dispatch(actions.doFetch());
  };
  render() {
    const {
      rightSidebar,
      questionsSidebar,
      toPlay,
      lectureNo,
      sectionType,
      courseProgress,
      currentAssignement,
    } = this.state;
    var { rows } = this.props;

    if (!rows) {
      return <div></div>;
    }

    return (
      <main className="d-flex align-items-start">
        <div
          className="ml-auto course-content_container"
          style={
            (!rightSidebar && !questionsSidebar) ||
            toPlay == 'Live Stream Lesson'
              ? { flex: '0 0 100%', maxWidth: '100%' }
              : (!rightSidebar && questionsSidebar) ||
                (rightSidebar && !questionsSidebar)
              ? {
                  flex:
                    window.innerWidth < 768
                      ? '0 0 100%'
                      : '0 0 75%',
                  maxWidth:
                    window.innerWidth < 768
                      ? '100%'
                      : '75%',
                }
              : rightSidebar && questionsSidebar
              ? {
                  flex:
                    window.innerWidth < 768
                      ? '0 0 100%'
                      : '0 0 50%',
                  maxWidth:
                    window.innerWidth < 768
                      ? '100%'
                      : '50%',
                }
              : {}
          }
        >
          <CourseContent
            toggleRightSidebar={this.state.rightSidebar}
            sectionHead={toPlay}
            lectureNo={lectureNo}
            sectionType={sectionType}
            currentAssignement={currentAssignement}
          />
        </div>
        <div
          className={`${
            toPlay == 'Live Stream Lesson'
              ? 'live-stream-sidebar'
              : 'course-sidebar_container'
          }`}
          style={
            !rightSidebar
              ? { flex: '0', maxWidth: '0' }
              : {
                  flex:
                    window.innerWidth < 576
                      ? '0 0 90%'
                      : '0 0 25%',
                  maxWidth:
                    window.innerWidth < 576
                      ? '100%'
                      : '25%',
                  width:
                    window.innerWidth < 576 ? '90%' : '25%',
                }
          }
        >
          <CourseSidebar
            rows={rows}
            setToPlay={(obj) => {
              console.log(obj);
              this.setState({ currentAssignement: obj });
            }}
          />
        </div>
        <div
          className="toggler"
          style={
            toPlay == 'Live Stream Lesson'
              ? { right: '95%', zIndex: '40' }
              : {}
          }
          onClick={() =>
            this.setState({
              rightSidebar: !this.state.rightSidebar,
            })
          }
        >
          <i className="fa fa-ellipsis-v"></i>
          <i className="fa fa-bars"></i>
        </div>
      </main>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
  };
}

export default connect(select)(CourseStudentsListPage);
