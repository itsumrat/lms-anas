import { Button, Col, Form, Row } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/roomSession/list/roomsessionListActions';
import selectors from 'modules/roomSession/list/roomsessionListSelectors';
import model from 'modules/roomSession/roomsessionModel';
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
import RoomsessionAutocompleteFormItem from 'view/roomsession/autocomplete/roomsessionAutocompleteFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import LevelSelectFormItem from 'view/level/autocomplete/levelSelectFormItem';
import SectorSelectFormItem from 'view/sector/autocomplete/sectorSelectFormItem';
import ClassroomSelectFormItem from 'view/classroom/autocomplete/classroomSelectFormItem';
import TeacherSelecteFormItem from 'view/teachers/autocomplete/teacherSelectFormItem';
import TeachersAutocompleteFormItem from 'view/teachers/autocomplete/teachersAutocompleteFormItem';
import SchoolYearAutocompleteFormItem from 'view/schoolYear/autocomplete/schoolYearAutocompleteFormItem';
import StudentsAutocompleteFormItem from 'view/students/autocomplete/studentsAutocompleteFormItem';
import CycleSelectFormItem from 'view/cycle/autocomplete/cycleSelectFormItem';
import MatterSelectFormItem from 'view/matter/autocomplete/matterSelectFormItem';
import ElementSelectFormItem from 'view/element/autocomplete/elementSelectFormItem';
import WeekSelectFormItem from 'view/week/autocomplete/weekSelectFormItem';
import SchoolYearSelectFormItem from 'view/schoolYear/autocomplete/schoolYearSelectFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.id,
  fields.name,
  fields.createdAt,
  fields.updatedAt,
  fields.createdAtRange,
  fields.day,
  fields.start_time,
  fields.end_time,
]);

class RoomsessionListFilter extends Component {
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
                  <Col md={24} lg={12}>
                    <InputFormItem
                      name={fields.id.name}
                      label={fields.id.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <SchoolYearSelectFormItem
                      name={fields.schoolYear.name}
                      label={fields.schoolYear.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <WeekSelectFormItem
                      name={fields.week.name}
                      label={fields.week.label}
                      layout={formItemLayout}
                      constraint={
                        form.values[fields.schoolYear.name]
                      }
                      update={form.setFieldValue}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <RoomsessionAutocompleteFormItem
                      name={fields.name.name}
                      label={fields.name.label}
                      layout={formItemLayout}
                    />
                  </Col>

                  <Col md={24} lg={12}>
                    <CycleSelectFormItem
                      name={fields.cycle.name}
                      label={fields.cycle.label}
                      layout={formItemLayout}
                    />
                  </Col>

                  <Col md={24} lg={12}>
                    <LevelSelectFormItem
                      name={fields.level.name}
                      label={fields.level.label}
                      layout={formItemLayout}
                      constraint={
                        form.values[fields.cycle.name]
                      }
                      update={form.setFieldValue}
                    />
                  </Col>

                  <Col md={24} lg={12}>
                    <SectorSelectFormItem
                      name={fields.sector.name}
                      label={fields.sector.label}
                      layout={formItemLayout}
                    />
                  </Col>

                  <Col md={24} lg={12}>
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

                  <Col md={24} lg={12}>
                    <MatterSelectFormItem
                      name={fields.matter.name}
                      label={fields.matter.label}
                      layout={formItemLayout}
                    />
                  </Col>

                  <Col md={24} lg={12}>
                    <ElementSelectFormItem
                      name={fields.element.name}
                      label={fields.element.label}
                      layout={formItemLayout}
                      sector={
                        form.values[fields.sector.name]
                      }
                      level={form.values[fields.level.name]}
                      matter={
                        form.values[fields.matter.name]
                      }
                      update={form.setFieldValue}
                    />
                  </Col>

                  <Col md={24} lg={12}>
                    <DatePickerFormItem
                      name={fields.start_time.name}
                      label={fields.start_time.label}
                      layout={formItemLayout}
                      showTime
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <DatePickerFormItem
                      name={fields.end_time.name}
                      label={fields.end_time.label}
                      layout={formItemLayout}
                      showTime
                    />
                  </Col>

                  <Col md={24} lg={12}>
                    <SelectFormItem
                      name={fields.day.name}
                      label={fields.day.label}
                      options={fields.day.name}
                      options={fields.day.options.map(
                        (item) => ({
                          value: item.id,
                          label: item.label,
                        }),
                      )}
                      layout={formItemLayout}
                    />
                  </Col>

                  <Col md={24} lg={12}>
                    <TeachersAutocompleteFormItem
                      name={fields.teacher.name}
                      label={fields.teacher.label}
                      layout={formItemLayout}
                    />
                  </Col>

                  <Col md={24} lg={12}>
                    <DatePickerFormItem
                      name={fields.createdAt.name}
                      label={fields.createdAt.label}
                      layout={formItemLayout}
                      showTime
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <DatePickerFormItem
                      name={fields.updatedAt.name}
                      label={fields.updatedAt.label}
                      layout={formItemLayout}
                      showTime
                    />
                  </Col>
                  <Col md={24} lg={12}>
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
  connect(select)(RoomsessionListFilter),
);
