import { Button, Form, Card, InputNumber } from 'antd';
import { Formik } from 'formik';
import actions from 'modules/auth/authActions';
import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Content from 'view/auth/styles/Content';
import ForgotPasswordPageWrapper from 'view/auth/styles/ForgotPasswordPageWrapper';
import Logo from 'view/auth/styles/Logo';
import InputFormItem, {
  InputFormItemNotFast,
} from 'view/shared/form/items/InputFormItem';
import FormSchema from 'view/shared/form/formSchema';
import { getHistory } from 'modules/store';
import service from 'modules/auth/authService';
import Message from 'view/shared/message';

import FormWrapperPasswordRest, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';

const { fields } = model;

class ForgotPasswordPageReset extends Component {
  constructor(props) {
    super(props);
    this.state = { secret_token: null };
  }

  schema = new FormSchema(1, [
    fields.newPassword,
    fields.confirmNewPassword,
  ]);

  componentDidMount() {
    try {
      const secret_token = this.props.location.state
        .secret_token;
      this.setState({ secret_token: secret_token });
    } catch (err) {
      getHistory().push('/');
    }
  }

  sendmail = () => {
    if (this.state.email != null) {
      service.sendPasswordResetEmail(this.state.email);
      Message.success(i18n('auth.passwordResetSuccess'));
    } else {
      getHistory().push('/');
    }
  };
  initialValues = () => {
    return this.schema.initialValues();
  };

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    if (this.state.secret_token == null) {
    }
    if (
      values.newpassword == values.confirm_password &&
      this.state.secret_token != null
    ) {
      dispatch(
        actions.resetEmailUpdatePassword(
          values.newpassword,
          this.state.secret_token,
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

  render() {
    return (
      <ForgotPasswordPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
          </Logo>
          <Card style={{}}>
            <Formik
              initialValues={this.initialValues()}
              validationSchema={this.schema.schema}
              onSubmit={this.handleSubmit}
              render={(form) => {
                return (
                  <Form onSubmit={form.handleSubmit}>
                    <InputFormItemNotFast
                      name={fields.newPassword.name}
                      placeholder={fields.newPassword.label}
                      autoComplete={fields.newPassword.name}
                      type="password"
                      errorMessage={this.state.errMsg}
                      form={form}
                      required={fields.newPassword.required}
                      layout={null}
                    />

                    <InputFormItemNotFast
                      name={fields.confirmNewPassword.name}
                      placeholder={
                        fields.confirmNewPassword.label
                      }
                      autoComplete={
                        fields.confirmNewPassword.name
                      }
                      type="password"
                      errorMessage={this.state.errMsg}
                      form={form}
                      required={
                        fields.confirmNewPassword.required
                      }
                      layout={null}
                    />

                    <Button
                      type="primary"
                      htmlType="submit"
                      icon="save"
                      size="large"
                      block
                    >
                      {i18n('common.edit')}
                    </Button>
                  </Form>
                );
              }}
            />
          </Card>
        </Content>
      </ForgotPasswordPageWrapper>
    );
  }
}

const select = (state) => ({
  loading: selectors.selectLoadingPasswordReset(state),
});

export default connect(select)(ForgotPasswordPageReset);
