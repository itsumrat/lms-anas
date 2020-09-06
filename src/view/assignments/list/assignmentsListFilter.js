import { Button, Col, Form, Row } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/assignments/list/assignmentsListActions';
import selectors from 'modules/assignments/list/assignmentsListSelectors';
import model from 'modules/assignments/assignmentsModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilterWrapper, {
  formItemLayout,
} from 'view/shared/styles/FilterWrapper';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'view/shared/form/items/DatePickerRangeFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';
import LevelSelectFormItem from 'view/level/autocomplete/levelSelectFormItem';
import ClassroomSelectFormItem from 'view/classroom/autocomplete/classroomSelectFormItem';
import CycleSelectFormItem from 'view/cycle/autocomplete/cycleSelectFormItem';
import SectorSelectFormItem from 'view/sector/autocomplete/sectorSelectFormItem';
import MatterSelectFormItem from 'view/matter/autocomplete/matterSelectFormItem';
import ElementSelectFormItem from 'view/element/autocomplete/elementSelectFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.id,
  fields.name,
  fields.level,
  fields.sector,
  fields.cycle,
  fields.classroom,
  fields.matter,
  fields.element,
  fields.createdAtRange,
]);

class AssignmentsListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch(this.initialFilter()));
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

    return (
      <FilterWrapper>
        <Formik
          initialValues={this.initialFilter()}
          validationSchema={schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                <Row gutter={24}>
                  <Col span={8} md={8} lg={8}>
                    <InputFormItem
                      name={fields.name.name}
                      label={fields.name.label}
                      layout={formItemLayout}
                    />
                  </Col>

                  <Col span={8} md={8} lg={8}>
                    <ClassroomSelectFormItem
                      name={fields.classroom.name}
                      label={fields.classroom.label}
                      layout={formItemLayout}
                      sector={
                        form.values[fields.sector.name]
                      }
                      level={form.values[fields.level.name]}
                      update={form.setFieldValue}
                    />
                  </Col>

                  <Col span={8} md={8} lg={8}>
                    <MatterSelectFormItem
                      name={fields.matter.name}
                      label={fields.matter.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col span={8} md={8} lg={8}>
                    <DatePickerRangeFormItem
                      name={fields.createdAtRange.name}
                      label={fields.createdAtRange.label}
                      layout={formItemLayout}
                      showTime
                    />
                  </Col>
                </Row>
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
  };
}

export default withRouter(
  connect(select)(AssignmentsListFilter),
);
