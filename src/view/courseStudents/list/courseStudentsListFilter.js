import { Button, Col, Form, Row } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/courseStudents/list/courseStudentsListActions';
import selectors from 'modules/courseStudents/list/courseStudentsListSelectors';
import authSelectors from 'modules/auth/authSelectors';

import model from 'modules/courseStudents/courseStudentsModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilterWrapper, {
  formItemLayout,
} from 'view/shared/styles/FilterWrapper';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'view/shared/form/items/DatePickerRangeFormItem';
import StudentsSelectFormItem from 'view/students/autocomplete/studentsSelectFormItem';
import LevelSelectFormItem from 'view/level/autocomplete/levelSelectFormItem';
import CycleSelectFormItem from 'view/cycle/autocomplete/cycleSelectFormItem';
import Permissions from 'security/permissions';
import PermissionChecker from 'modules/auth/permissionChecker';
import MatterSelectFormItem from 'view/matter/autocomplete/matterSelectFormItem';
import ClassroomSelectFormItem from 'view/classroom/autocomplete/classroomSelectFormItem';
const { fields } = model;
const permissions = Permissions.values;
const schema = new FormFilterSchema([
  fields.id,
  fields.classroom,
  fields.cycle,
  fields.student,
  fields.level,
]);

class LevelListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch());
  }

  initialFilter = () => {
    return schema.initialValues(
      this.props.filter,
      this.props.location,
    );
  };

  handleSubmit = (values) => {
    const valuesToSubmit = schema.cast(values);
    const { dispatch } = this.props;

    dispatch(actions.doFetch(valuesToSubmit));
  };

  handleReset = (form) => {
    form.setValues({});
    const { dispatch } = this.props;
    dispatch(actions.doReset());
  };

  render() {
    const { loading } = this.props;
    console.log(this.props);
    let { CurrentUser } = this.props;
    const permissionChecker = new PermissionChecker(
      CurrentUser,
    );

    return (
      <FilterWrapper>
        <Formik
          initialValues={this.initialFilter()}
          validationSchema={schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                {permissionChecker.match(
                  permissions.HomeFramer,
                ) && (
                  <Row gutter={24}>
                    <Col md={24} lg={12}>
                      <CycleSelectFormItem
                        name={fields.cycle.name}
                        label={fields.cycle.label}
                        layout={formItemLayout}
                      />
                    </Col>

                    <Col md={24} lg={12}>
                      <ClassroomSelectFormItem
                        name={fields.classroom.name}
                        label={fields.classroom.label}
                        layout={formItemLayout}
                      />
                    </Col>

                    <Col md={24} lg={12}>
                      <MatterSelectFormItem
                        name={fields.matter.name}
                        label={fields.matter.label}
                        layout={formItemLayout}
                      />
                    </Col>
                  </Row>
                )}

                {permissionChecker.match(
                  permissions.HomeParent,
                ) && (
                  <Row gutter={24}>
                    <Col md={24} lg={12}>
                      <StudentsSelectFormItem
                        name={fields.student.name}
                        label={fields.student.label}
                        layout={formItemLayout}
                      />
                    </Col>
                  </Row>
                )}
                <Row>
                  <Col className="filter-buttons" span={24}>
                    <Button
                      loading={loading}
                      icon="search"
                      type="primary"
                      htmlType="submit"
                    >
                      {i18n('common.search')}
                    </Button>
                    <Button
                      loading={loading}
                      onClick={() => this.handleReset(form)}
                      icon="undo"
                    >
                      {i18n('common.reset')}
                    </Button>
                  </Col>
                </Row>
              </Form>
            );
          }}
        />
      </FilterWrapper>
    );
  }
}

function select(state) {
  return {
    filter: selectors.selectFilter(state),
    CurrentUser: authSelectors.selectCurrentUser(state),
  };
}

export default withRouter(connect(select)(LevelListFilter));
