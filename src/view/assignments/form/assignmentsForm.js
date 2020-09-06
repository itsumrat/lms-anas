import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/assignments/form/assignmentsFormActions';
import selectors from 'modules/assignments/form/assignmentsFormSelectors';
import model from 'modules/assignments/assignmentsModel';
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
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'view/shared/form/items/FilesFormItem';
import LevelSelectFormItem from 'view/level/autocomplete/levelSelectFormItem';
import ClassroomSelectFormItem from 'view/classroom/autocomplete/classroomSelectFormItem';
import MatterSelectFormItem from 'view/matter/autocomplete/matterSelectFormItem';

import TypeAssignmentSelectFormItem from 'view/assignments/autocomplete/typeAssignmentSelectFormItem';
import SectorSelectFormItem from 'view/sector/autocomplete/sectorSelectFormItem';
import CycleSelectFormItem from 'view/cycle/autocomplete/cycleSelectFormItem';
import ElementSelectFormItem from 'view/element/autocomplete/elementSelectFormItem';
import AddCourseDesc from 'view/shared/components/coursesView/components/Description/AddCourseDesc/add-course-desc.component';

const { fields } = model;

class AssignmentsForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.name,
    fields.file,
    fields.level,
    fields.sector,
    fields.cycle,
    fields.classroom,
    fields.matter,
    fields.types_assignment,
    fields.element,
    fields.type_course,
    fields.coursHtml,
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

    console.log(record)

    if (this.isEditing() && record) {
      return this.schema.initialValues({
        ...record,
        id: record.id,
        types_assignment: record.types_assignment,
        name: record.name,
        cycle:
          record.classroom_teacher_matter.classroom
            .level_sector.level.cycle,
        sector:
          record.classroom_teacher_matter.classroom
            .level_sector.sector,
        level:
          record.classroom_teacher_matter.classroom
            .level_sector.level,
        classroom:
          record.classroom_teacher_matter.classroom,
        matter: record.classroom_teacher_matter.matter,
        element: record.classroom_teacher_matter.classroom
        .level_sector.elements[0].id,
        type_course: record.type_course,
        coursHTML: record.coursHTML,
      });
    }
    console.log(fields.type_course);
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

                <InputFormItem
                  name={fields.name.name}
                  label={fields.name.label}
                  required={fields.name.required}
                />

                <TypeAssignmentSelectFormItem
                  name={fields.types_assignment.name}
                  label={fields.types_assignment.label}
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

                <SelectFormItem
                  name={fields.type_course.name}
                  label={fields.type_course.label}
                  options={fields.type_course.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  type={'enumerator'}
                  required={fields.type_course.required}
                />
                {form.values[fields.type_course.name] ==
                  0 && (
                  <FilesFormItem
                    name={fields.file.name}
                    label={fields.file.label}
                    path={fields.file.path}
                    max={fields.file.max}
                  />
                )}

                {form.values[fields.type_course.name] ==
                  1 && (
                  <AddCourseDesc
                    name={fields.coursHtml.name}
                    label={fields.coursHtml.label}
                  />
                )}

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

export default connect(select)(AssignmentsForm);
