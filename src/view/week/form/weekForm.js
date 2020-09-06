import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/week/form/weekFormActions';
import selectors from 'modules/week/form/weekFormSelectors';
import model from 'modules/week/weekModel';
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
import CycleSelectFormItem from 'view/cycle/autocomplete/cycleSelectFormItem';
import SectorSelectFormItem from 'view/sector/autocomplete/sectorSelectFormItem';
import StudentsSelectFormItem from 'view/students/autocomplete/studentsSelectFormItem';
import SchoolYearSelectFormItem from 'view/schoolYear/autocomplete/schoolYearSelectFormItem';
import StudentsAutocompleteFormItem from 'view/students/autocomplete/studentsAutocompleteFormItem';

const { fields } = model;

class WeekForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.schoolYear,
    fields.start_date,
    fields.end_date,
    fields.name,
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
        schoolYear: record[0].school_year,
        start_date: record[0].start_date,
        end_date: record[0].end_date,
        name: record[0].name,
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

                <InputFormItem
                  name={fields.name.name}
                  label={fields.name.label}
                  required={fields.name.required}
                />

                <SchoolYearSelectFormItem
                  name={fields.schoolYear.name}
                  label={fields.schoolYear.label}
                  required={fields.schoolYear.required}
                />

                <DatePickerFormItem
                  name={fields.start_date.name}
                  label={fields.start_date.label}
                  required={fields.start_date.required}
                />

                <DatePickerFormItem
                  name={fields.end_date.name}
                  label={fields.end_date.label}
                  required={fields.end_date.required}
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

export default connect(select)(WeekForm);
