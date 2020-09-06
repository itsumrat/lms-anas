import { Button, Col, Form, Row } from "antd";
import { Formik } from "formik";
import { i18n } from "i18n";
import actions from "modules/chat/list/chatListActions";
import selectors from "modules/chat/list/chatListSelectors";
import model from "modules/chat/chatModel";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FilterWrapper, {
  formItemLayout,
} from "view/shared/styles/FilterWrapper";
import FormFilterSchema from "view/shared/form/formFilterSchema";
import InputFormItem from "view/shared/form/items/InputFormItem";
import DatePickerRangeFormItem from "view/shared/form/items/DatePickerRangeFormItem";
import DatePickerFormItem from "view/shared/form/items/DatePickerFormItem";
import ChatAutocompleteFormItem from "view/chat/autocomplete/chatAutocompleteFormItem";

const { fields } = model;

const schema = new FormFilterSchema([
  fields.id,
  fields.name,
  fields.createdAt,
  fields.updatedAt,
  fields.createdAtRange,
]);

class ChatListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch(this.initialFilter()));
  }

  initialFilter = () => {
    return schema.initialValues(this.props.filter, this.props.location);
  };

  handleSubmit = (values) => {
    const valuesToSubmit = schema.cast(values);
    const { dispatch } = this.props;
    dispatch(actions.doFetch(valuesToSubmit));
  };

  handleReset = (form) => {
    form.setValues({});
    const { dispatch } = this.props;
    dispatch(actions.doReset());
  };

  render() {
    const { loading } = this.props;

    return (
      <FilterWrapper>
        <Formik
          initialValues={this.initialFilter()}
          validationSchema={schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                <Row gutter={24}>
                  <Col md={24} lg={12}>
                    <InputFormItem
                      name={fields.id.name}
                      label={fields.id.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <InputFormItem
                      name={fields.name.name}
                      label={fields.name.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <DatePickerFormItem
                      name={fields.createdAt.name}
                      label={fields.createdAt.label}
                      layout={formItemLayout}
                      showTime
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <DatePickerFormItem
                      name={fields.updatedAt.name}
                      label={fields.updatedAt.label}
                      layout={formItemLayout}
                      showTime
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <DatePickerRangeFormItem
                      name={fields.createdAtRange.name}
                      label={fields.createdAtRange.label}
                      layout={formItemLayout}
                      showTime
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="filter-buttons" span={24}>
                    <Button
                      loading={loading}
                      icon="search"
                      type="primary"
                      htmlType="submit"
                    >
                      {i18n("common.search")}
                    </Button>
                    <Button
                      loading={loading}
                      onClick={() => this.handleReset(form)}
                      icon="undo"
                    >
                      {i18n("common.reset")}
                    </Button>
                  </Col>
                </Row>
              </Form>
            );
          }}
        />
      </FilterWrapper>
    );
  }
}

function select(state) {
  return {
    filter: selectors.selectFilter(state),
  };
}

export default withRouter(connect(select)(ChatListFilter));
