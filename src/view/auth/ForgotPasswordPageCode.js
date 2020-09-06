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
import OtherActions from 'view/auth/styles/OtherActions';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import FormSchema from 'view/shared/form/formSchema';
import { getHistory } from 'modules/store';
import service from 'modules/auth/authService';
import Message from 'view/shared/message';

const { fields } = model;

class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: null };
  }

  componentDidMount() {
    try {
      const email = this.props.location.state.email;
      this.setState({ email: email });
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

  doSubmit = ({ code }) => {
    const { dispatch } = this.props;

    dispatch(
      actions.doSendCodeResetEmail(this.state.email, code),
    );
  };

  render() {
    return (
      <ForgotPasswordPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
          </Logo>
          <Card style={{ padding: 50 }}>
            <Formik
              onSubmit={this.doSubmit}
              render={(form) => (
                <Form onSubmit={form.handleSubmit}>
                  <InputFormItem
                    name={'code'}
                    size="large"
                    placeholder={'code'}
                    autoFocus
                    autoComplete={'code'}
                    layout={{
                      labelCol: {
                        md: { span: 8 },
                      },
                      wrapperCol: {
                        md: { span: 50 },
                      },
                    }}
                  />
                  <Button
                    icon="arrow-right"
                    type="primary"
                    size="large"
                    block
                    htmlType="submit"
                    loading={this.props.loading}
                  ></Button>

                  <OtherActions>
                    <Button
                      type="default"
                      icon="download"
                      onClick={this.sendmail}
                      block
                    >
                      {i18n('auth.passwordReset.message1')}
                    </Button>
                    <Link to="/auth/signin">
                      {i18n('common.cancel')}
                    </Link>
                  </OtherActions>
                </Form>
              )}
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

export default connect(select)(ForgotPasswordPage);
