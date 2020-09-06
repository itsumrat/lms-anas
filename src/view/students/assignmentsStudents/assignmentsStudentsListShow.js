import { Button, Col, Form, Row } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilterWrapper, {
  formItemLayout,
} from 'view/shared/styles/FilterWrapper';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import selectors from 'modules/students/assignmentsStudents/assignmentsSelectors';
import { getHistory } from 'modules/store';
import services from 'modules/students/assignmentsStudents/assignmentsStudentsServices';
import upload from 'modules/shared/upload/upload';
class AssignmentsStudentsListShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignements: [],
    };
  }

  handleLive = () => {
    getHistory().push({
      pathname: '/live',
    });
  };
  handleEmploi = () => {
    getHistory().push({
      pathname: '/EmploidutempsEtudiant',
    });
  };

  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  buttonclick = (e) => {
    this.setState({ Files: 'Matiere 1 Content' });
  };

  listAssignements = async (id) => {
    let response = await services.listAssignements(id);
    this.setState({ assignements: response });
  };
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch(actions.doFetch(this.initialFilter()));
  // }

  // initialFilter = () => {
  //   return schema.initialValues(
  //     this.props.filter,
  //     this.props.location,
  //   );
  // };

  // handleSubmit = (values) => {
  //   const valuesToSubmit = schema.cast(values);
  //   const { dispatch } = this.props;

  //   dispatch(actions.doFetch(valuesToSubmit));
  // };

  // handleReset = (form) => {
  //   form.setValues({});
  //   const { dispatch } = this.props;
  //   dispatch(actions.doReset());
  // };

  render() {
    const { loading, matters } = this.props;
    var { assignements } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4">
            <div
              className="list-group"
              id="list-tab"
              role="tablist"
            >
              {matters.map((item, index) => (
                <button
                  key={index}
                  className={this.state.classname}
                  onClick={() => {
                    this.listAssignements(item.id);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="col-8">
            {assignements.map((item, index) => (
              <div
                key={index}
                className="list-group"
                id="list-tab"
                role="tablist"
              >
                <a
                  className="list-group-item list-group-item-action"
                  href={upload.getPath(item.payload)}
                >
                  {item.assignment_name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    assignements: selectors.selectListAssignments(state),
    matters: selectors.selectListMatters(state),
  };
}

export default withRouter(
  connect(select)(AssignmentsStudentsListShow),
);
