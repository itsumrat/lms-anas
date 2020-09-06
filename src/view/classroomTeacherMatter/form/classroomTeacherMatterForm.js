import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/classroomTeacherMatter/form/classroomTeacherMatterFormActions';
import selectors from 'modules/classroomTeacherMatter/form/classroomTeacherMatterFormSelectors';
import model from 'modules/classroomTeacherMatter/classroomTeacherMatterModel';
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
import TeacherSelectFormItem from 'view/teachers/autocomplete/teacherSelectFormItem';
import CycleSelectFormItem from 'view/cycle/autocomplete/cycleSelectFormItem';
import SectorSelectFormItem from 'view/sector/autocomplete/sectorSelectFormItem';
import TeachersAutocompleteFormItem from 'view/teachers/autocomplete/teachersAutocompleteFormItem';
import TeachersService from 'modules/teachers/teachersService';
import teachersFormSelectors from 'modules/teachers/form/teachersFormSelectors';
import SchoolYearSelectFormItem from 'view/schoolYear/autocomplete/schoolYearSelectFormItem';

const { fields } = model;

class ClassroomTeacherMatterForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.teacher,
    fields.matter,
    fields.classroom,
    fields.level,
    fields.sector,
    fields.cycle,
    fields.schoolYear,
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
        cycle: record[0].classroom.level_sector.level.cycle,
        sector: record[0].classroom.level_sector.sector,
        level: record[0].classroom.level_sector.level,
        classroom: record[0].classroom,
        teacher: {
          id: record[0].teacher.id,
          name:
            record[0].teacher.first_name +
            ' ' +
            record[0].teacher.last_name,
        },
        schoolYear: record[0].school_year,
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

                <TeacherSelectFormItem
                  name={fields.teacher.name}
                  label={fields.teacher.label}
                  required={fields.teacher.required}
                />

                <MatterSelectFormItem
                  name={fields.matter.name}
                  label={fields.matter.label}
                  required={fields.matter.required}
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

export default connect(select)(ClassroomTeacherMatterForm);
