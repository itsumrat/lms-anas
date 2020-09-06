import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/framerMatterCycle/form/framerMatterCycleFormActions';
import selectors from 'modules/framerMatterCycle/form/framerMatterCycleFormSelectors';
import model from 'modules/framerMatterCycle/framerMatterCycleModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import FramerSelectFormItem from 'view/framer/autocomplete/framerSelectFormItem';
import MatterSelectFormItem from 'view/matter/autocomplete/matterSelectFormItem';
import CycleSelectFormItem from 'view/cycle/autocomplete/cycleSelectFormItem';
import SchoolYearSelectFormItem from 'view/schoolYear/autocomplete/schoolYearSelectFormItem';
import FramerAutocompleteFormItem from 'view/framer/autocomplete/framerAutocompleteFormItem';

const { fields } = model;

class FramerMatterCycleForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.matter,
    fields.framer,
    fields.schoolYear,
    fields.cycle,
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
        ...record,
        id: record[0].id,
        framer: {
          id: record[0].framer.id,
          name:
            record[0].framer.first_name +
            ' ' +
            record[0].framer.last_name,
        },
        matter: record[0].matter.id,
        cycle: record[0].cycle.id,
        schoolYear: record[0].school_year.id,
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
                <FramerAutocompleteFormItem
                  name={fields.framer.name}
                  label={fields.framer.label}
                  required={fields.framer.required}
                />
                <MatterSelectFormItem
                  name={fields.matter.name}
                  label={fields.matter.label}
                  required={fields.matter.required}
                />
                <CycleSelectFormItem
                  name={fields.cycle.name}
                  label={fields.cycle.label}
                  required={fields.cycle.required}
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

export default connect(select)(FramerMatterCycleForm);
