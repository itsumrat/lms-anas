import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/roomSession/form/roomsessionFormActions';
import selectors from 'modules/roomSession/form/roomsessionFormSelectors';
import model from 'modules/roomSession/roomsessionModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import TextAreaFormItem from 'view/shared/form/items/TextAreaFormItem';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';
import TimePickerFormItem from 'view/shared/form/items/TimePickerFormItem';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'view/shared/form/items/FilesFormItem';
import LevelSelectFormItem from 'view/level/autocomplete/levelSelectFormItem';
import ClassroomSelectFormItem from 'view/classroom/autocomplete/classroomSelectFormItem';
import TeacherSelecteFormItem from 'view/teachers/autocomplete/teacherSelectFormItem';
import SchoolYearSelectFormItem from 'view/schoolYear/autocomplete/schoolYearSelectFormItem';
import CycleSelectFormItem from 'view/cycle/autocomplete/cycleSelectFormItem';
import SectorSelectFormItem from 'view/sector/autocomplete/sectorSelectFormItem';
import ElementSelectFormItem from 'view/element/autocomplete/elementSelectFormItem';
import MatterSelectFormItem from 'view/matter/autocomplete/matterSelectFormItem';
import WeekSelectFormItem from 'view/week/autocomplete/weekSelectFormItem';

const { fields } = model;

class RoomsessionForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.name,
    fields.day,
    fields.start_time,
    fields.end_time,
    fields.classroom,
    fields.level,
    fields.sector,
    fields.cycle,
    fields.element,
    fields.teacher,
    fields.matter,
    fields.schoolYear,
    fields.week,
  ]);

  componentDidMount() {
    const { dispatch, match } = this.props;

    if (this.isEditing()) {
      dispatch(actions.doFind(match.params.id));
    } else {
      dispatch(actions.doNew());
    }
  }

  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    const { id, ...data } = this.schema.cast(values);

    if (this.isEditing()) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  initialValues = () => {
    const record = this.props.record;

    if (this.isEditing() && record) {
      return this.schema.initialValues({
        ...record[0],
        id: record[0].id,
        day: record[0].day,
        start_time: record[0].start_time,
        end_time: record[0].end_time,
        level:
          record[0].classroom_teacher_matter.classroom
            .level_sector.level,
        cycle:
          record[0].classroom_teacher_matter.classroom
            .level_sector.level.cycle,
        sector:
          record[0].classroom_teacher_matter.classroom
            .level_sector.sector,
        element: record[0].element,
        classroom:
          record[0].classroom_teacher_matter.classroom,
        teacher: {
          id: record[0].classroom_teacher_matter.teacher.id,
          name:
            record[0].classroom_teacher_matter.teacher.user
              .first_name +
            ' ' +
            record[0].classroom_teacher_matter.teacher.user
              .last_name,
        },
        matter: record[0].classroom_teacher_matter.matter,
        schoolYear: record[0].week.school_year,
        week: {
          id: record[0].week.id,
          name: record[0].week.name,
        },
      });
    }

    return this.schema.initialValues();
  };

  renderForm() {
    const { saveLoading } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            console.log(form.values);
            return (
              <Form onSubmit={form.handleSubmit}>
                {this.isEditing() && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <SchoolYearSelectFormItem
                  name={fields.schoolYear.name}
                  label={fields.schoolYear.label}
                  required={fields.schoolYear.required}
                />

                <WeekSelectFormItem
                  name={fields.week.name}
                  label={fields.week.label}
                  required={fields.week.required}
                  constraint={
                    form.values[fields.schoolYear.name]
                  }
                  update={form.setFieldValue}
                />

                <InputFormItem
                  name={fields.name.name}
                  label={fields.name.label}
                  required={fields.name.required}
                />
                <TimePickerFormItem
                  name={fields.start_time.name}
                  label={fields.start_time.label}
                  required={fields.start_time.required}
                  showTime
                />
                <TimePickerFormItem
                  name={fields.end_time.name}
                  label={fields.end_time.label}
                  required={fields.end_time.required}
                  showTime
                />

                <SelectFormItem
                  name={fields.day.name}
                  label={fields.day.label}
                  options={fields.day.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  type={'enumerator'}
                  required={fields.day.required}
                />

                <CycleSelectFormItem
                  name={fields.cycle.name}
                  label={fields.cycle.label}
                  required={fields.cycle.required}
                />

                <LevelSelectFormItem
                  name={fields.level.name}
                  label={fields.level.label}
                  required={fields.level.required}
                  constraint={
                    form.values[fields.cycle.name]
                  }
                  update={form.setFieldValue}
                />

                <SectorSelectFormItem
                  name={fields.sector.name}
                  label={fields.sector.label}
                  required={fields.sector.required}
                />

                <ClassroomSelectFormItem
                  name={fields.classroom.name}
                  label={fields.classroom.label}
                  required={fields.classroom.required}
                  sector={form.values[fields.sector.name]}
                  level={form.values[fields.level.name]}
                  update={form.setFieldValue}
                />

                <MatterSelectFormItem
                  name={fields.matter.name}
                  label={fields.matter.label}
                  required={fields.matter.required}
                />

                <ElementSelectFormItem
                  name={fields.element.name}
                  label={fields.element.label}
                  required={fields.element.required}
                  sector={form.values[fields.sector.name]}
                  level={form.values[fields.level.name]}
                  matter={form.values[fields.matter.name]}
                  update={form.setFieldValue}
                />

                <TeacherSelecteFormItem
                  name={fields.teacher.name}
                  label={fields.teacher.label}
                  required={fields.teacher.required}
                />

                <Form.Item
                  className="form-buttons"
                  {...tailFormItemLayout}
                >
                  <Button
                    loading={saveLoading}
                    type="primary"
                    htmlType="submit"
                    icon="save"
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    icon="undo"
                  >
                    {i18n('common.reset')}
                  </Button>
                </Form.Item>
              </Form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (this.isEditing() && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

function select(state) {
  return {
    findLoading: selectors.selectFindLoading(state),
    saveLoading: selectors.selectSaveLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(RoomsessionForm);
