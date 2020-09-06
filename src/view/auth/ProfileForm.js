import { Button, Form } from 'antd';
import { Formik } from 'formik';
import actions from 'modules/auth/authActions';
import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import FormSchema from 'view/shared/form/formSchema';
import Message from 'view/shared/message';
import { Link } from 'react-router-dom';

import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';

const { fields } = model;

class ProfileFormPage extends Component {
  schema = new FormSchema(fields.id, [
    fields.email,
    fields.first_name,
    fields.last_name,
    fields.phone,
    fields.avatar_url,
  ]);

  handleSubmit = (values) => {
    const { dispatch } = this.props;

    dispatch(
      actions.doUpdateProfile(
        values.first_name,
        values.last_name,
        values.phone,
        values.avatar_url,
      ),
    );
    Message.success(i18n(`entities.ad.isMutual.success`));
  };

  initialValues = () => {
    const currentUser = this.props.currentUser;
    return this.schema.initialValues(currentUser);
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
                <ViewFormItem
                  name={fields.email.name}
                  label={fields.email.label}
                />

                <InputFormItem
                  name={fields.first_name.name}
                  label={fields.first_name.label}
                  autoComplete={fields.first_name.name}
                  autoFocus
                />

                <InputFormItem
                  name={fields.last_name.name}
                  label={fields.last_name.label}
                  autoComplete={fields.last_name.name}
                />

                <InputFormItem
                  name={fields.phone.name}
                  label={fields.phone.label}
                  autoComplete={fields.phone.name}
                  prefix={'+'}
                />

                <ImagesFormItem
                  name={fields.avatar_url.name}
                  label={fields.avatar_url.label}
                  path={fields.avatar_url.path(
                    this.props.currentUser.id,
                  )}
                  schema={{
                    size: fields.avatar_url.size,
                  }}
                  max={fields.avatar_url.max}
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
    return this.renderForm();
  }
}

function select(state) {
  return {
    saveLoading: selectors.selectLoadingUpdateProfile(
      state,
    ),
    currentUser: selectors.selectCurrentUser(state),
  };
}

export default connect(select)(ProfileFormPage);
