import { Button, Form } from 'antd';
import { Formik } from 'formik';
import actions from 'modules/auth/authActions';
import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import queryString from 'query-string';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Content from 'view/auth/styles/Content';
import Logo from 'view/auth/styles/Logo';
import OtherActions from 'view/auth/styles/OtherActions';
import SignupPageWrapper from 'view/auth/styles/SignupPageWrapper';
import InputFormItem, {
  InputFormItemNotFast,
} from 'view/shared/form/items/InputFormItem';
import FormSchema from 'view/shared/form/formSchema';
import Message from 'view/shared/message';

const { fields } = model;

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { errMsg: null };
  }
  schema = new FormSchema(fields.id, [
    fields.email,
    fields.password,
    fields.lastName,
    fields.firstName,
  ]);

  componentDidMount() {
    this.clearErrorMessage();
  }

  handleChange(event, form) {
    if (this.props.errorMessage) {
      this.clearErrorMessage();
    }

    form.handleChange(event);
  }

  clearErrorMessage = () => {
    const { dispatch } = this.props;
    dispatch(actions.doClearErrorMessage());
  };

  initialValues = () => {
    return {
      email: this.emailFromInvitation() || '',
      password: '',
    };
  };

  emailFromInvitation = () => {
    return queryString.parse(this.props.location.search)
      .email;
  };

  doSubmit = ({
    email,
    password,
    firstName,
    lastName,
    confirmPassword,
  }) => {
    const { dispatch } = this.props;
    if (confirmPassword == password) {
      dispatch(
        actions.doRegisterEmailAndPassword(
          email,
          password,
          firstName,
          lastName,
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
      <SignupPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
          </Logo>

          <Formik
            initialValues={this.initialValues()}
            validationSchema={this.schema.schema}
            onSubmit={this.doSubmit}
            render={(form) => (
              <Form onSubmit={form.handleSubmit}>
                <InputFormItem
                  name={fields.firstName.name}
                  placeholder={fields.firstName.label}
                  autoComplete={fields.firstName.name}
                  
                  type="text"
                  size="large"
                  layout={null}
                />
                <InputFormItem
                  name={fields.lastName.name}
                  placeholder={fields.lastName.label}
                  autoComplete={fields.lastName.name}
                  type="text"
                  size="large"
                  layout={null}
                />

                <InputFormItemNotFast
                  name={fields.email.name}
                  placeholder={fields.email.label}
                  autoComplete={fields.email.name}
                  size="large"
                  autoFocus
                  errorMessage={this.props.errorMessage}
                  layout={null}
                  form={form}
                />

                <InputFormItemNotFast
                  name={fields.password.name}
                  placeholder={fields.password.label}
                  autoComplete={fields.password.name}
                  type="password"
                  size="large"
                  layout={null}
                  errorMessage={this.state.errMsg}
                  form={form}
                />
                <InputFormItemNotFast
                  name={fields.confirmPassword.name}
                  placeholder={fields.confirmPassword.label}
                  autoComplete={fields.confirmPassword.name}
                  type="password"
                  size="large"
                  layout={null}
                  errorMessage={this.state.errMsg}
                  form={form}
                />

                <Button
                  type="primary"
                  size="large"
                  block
                  htmlType="submit"
                  loading={this.props.loading}
                >
                  {i18n('auth.signup')}
                </Button>

                <OtherActions>
                  <Link to="/auth/signin">
                    {i18n('auth.alreadyHaveAnAccount')}
                  </Link>
                </OtherActions>
              </Form>
            )}
          />
        </Content>
      </SignupPageWrapper>
    );
  }
}

const select = (state) => ({
  loading: selectors.selectLoading(state),
  errorMessage: selectors.selectErrorMessage(state),
});

export default connect(select)(SignupPage);
