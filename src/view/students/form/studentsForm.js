import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/students/form/studentsFormActions';
import selectors from 'modules/students/form/studentsFormSelectors';
import model from 'modules/students/studentsModel';
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
import ParentSelectFormItem from 'view/parent/autocomplete/parentSelectFormItem';
import ParentAutocompleteFormItem from 'view/parent/autocomplete/parentAutocompleteFormItem';

const { fields } = model;

class StudentsForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.email,
    fields.first_name,
    fields.last_name,
    fields.quality_tutor1,
    fields.quality_tutor2,
    fields.father,
    fields.mother,
    fields.tutor1,
    fields.tutor2,
    fields.code_massar,
    fields.phone,
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

    console.log(record);

    if (this.isEditing() && record) {
      return this.schema.initialValues({
        ...record.user,
        id: record.id,
        father: record.father
          ? {
              id: record.father.id,
              name:
                record.father.first_name +
                ' ' +
                record.father.last_name,
            }
          : null,
        mother: record.mother
          ? {
              id: record.mother.id,
              name:
                record.mother.first_name +
                ' ' +
                record.mother.last_name,
            }
          : null,
        tutor1: record.tutor1
          ? {
              id: record.tutor1.id,
              name:
                record.tutor1.first_name +
                ' ' +
                record.tutor1.last_name,
            }
          : null,
        tutor2: record.tutor2
          ? {
              id: record.tutor2.id,
              name:
                record.tutor2.first_name +
                ' ' +
                record.tutor2.last_name,
            }
          : null,
        quality_tutor1: record.quality_tutor1,
        quality_tutor2: record.quality_tutor2,
        code_massar: record.code_massar,
        phone: record.user.phone,
        first_name: record.first_name,
        last_name: record.last_name,
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
                <InputFormItem
                  name={fields.email.name}
                  label={fields.email.label}
                  required={fields.email.required}
                />
                <InputFormItem
                  name={fields.code_massar.name}
                  label={fields.code_massar.label}
                  required={fields.code_massar.required}
                />
                <InputFormItem
                  name={fields.phone.name}
                  label={fields.phone.label}
                  required={fields.phone.required}
                />
                <InputFormItem
                  name={fields.first_name.name}
                  label={fields.first_name.label}
                  required={fields.first_name.required}
                />
                <InputFormItem
                  name={fields.last_name.name}
                  label={fields.last_name.label}
                  required={fields.last_name.required}
                />

                <ParentAutocompleteFormItem
                  name={fields.father.name}
                  label={fields.father.label}
                  required={fields.father.required}
                />

                <ParentAutocompleteFormItem
                  name={fields.mother.name}
                  label={fields.mother.label}
                  required={fields.mother.required}
                />

                <ParentAutocompleteFormItem
                  name={fields.tutor1.name}
                  label={fields.tutor1.label}
                  required={fields.tutor1.required}
                />

                <SelectFormItem
                  name={fields.quality_tutor1.name}
                  label={fields.quality_tutor1.label}
                  options={fields.quality_tutor1.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  type={'enumerator'}
                  required={fields.quality_tutor1.required}
                />

                <ParentAutocompleteFormItem
                  name={fields.tutor2.name}
                  label={fields.tutor2.label}
                  required={fields.tutor2.required}
                />

                <SelectFormItem
                  name={fields.quality_tutor2.name}
                  label={fields.quality_tutor2.label}
                  options={fields.quality_tutor2.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  type={'enumerator'}
                  required={fields.quality_tutor2.required}
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

export default connect(select)(StudentsForm);
