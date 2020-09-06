import { Button, Form } from 'antd';
import { Formik } from 'formik';
import actions from 'modules/auth/authActions';
import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import InputFormItem, {
  InputFormItemNotFast,
} from 'view/shared/form/items/InputFormItem';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import FormSchema from 'view/shared/form/formSchema';
import Message from 'view/shared/message';

import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';

const { fields } = model;

class ProfileFormEditPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { errMsg: null };
  }
  schema = new FormSchema(fields.id, [
    fields.email,

    fields.password,
    fields.newPassword,
    fields.confirmNewPassword,
  ]);

  handleSubmit = (values) => {
    const { dispatch } = this.props;

    if (values.newpassword == values.confirm_password) {
      dispatch(
        actions.doUpdatePassword(
          values.email,
          values.newpassword,
          values.password,
        ),
      );
    } else {
      Message.error(
        i18n('auth.editpassword.errornewpassword'),
      );
      this.setState({
        errMsg: i18n('auth.editpassword.errornewpassword'),
      });
    }
  };

  initialValues = () => {
    const currentUser = this.props.currentUser;
    return this.schema.initialValues(currentUser);
  };
  getErreurMsg = () => {
    return this.props.errorMessage;
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
                <InputFormItemNotFast
                  name={fields.password.name}
                  placeholder={fields.password.label}
                  autoComplete={fields.password.name}
                  label={fields.password.label}
                  type="password"
                  errorMessage={this.props.errorMessage}
                  form={form}
                  required={fields.password.required}
                />
                <InputFormItemNotFast
                  name={fields.newPassword.name}
                  placeholder={fields.newPassword.label}
                  autoComplete={fields.newPassword.name}
                  label={fields.newPassword.label}
                  type="password"
                  errorMessage={this.state.errMsg}
                  form={form}
                  required={fields.newPassword.required}
                />

                <InputFormItemNotFast
                  name={fields.confirmNewPassword.name}
                  placeholder={
                    fields.confirmNewPassword.label
                  }
                  autoComplete={
                    fields.confirmNewPassword.name
                  }
                  label={fields.confirmNewPassword.label}
                  type="password"
                  errorMessage={this.state.errMsg}
                  form={form}
                  required={
                    fields.confirmNewPassword.required
                  }
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
    errorMessage: selectors.selectErrorMessage(state),

    currentUser: selectors.selectCurrentUser(state),
  };
}

export default connect(select)(ProfileFormEditPassword);
