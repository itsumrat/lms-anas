import { Button, Col, Form, Row } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/educDirectorCycle/list/educDirectorCycleListActions';
import selectors from 'modules/educDirectorCycle/list/educDirectorCycleListSelectors';
import model from 'modules/educDirectorCycle/educDirectorCycleModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilterWrapper, {
  formItemLayout,
} from 'view/shared/styles/FilterWrapper';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'view/shared/form/items/DatePickerRangeFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';
import EducDirectorCycleAutocompleteFormItem from 'view/educDirectorCycle/autocomplete/educDirectorCycleAutocompleteFormItem';
import EducDirectorCycleSelectFormItem from 'view/educDirectorCycle/autocomplete/educDirectorCycleSelectFormItem';
import CylceSelectFormItem from 'view/cycle/autocomplete/cycleSelectFormItem';
import EducDirectorAutocompleteFormItem from 'view/educDirector/autocomplete/educDirectorAutocompleteFormItem';
import CycleAutocompleteFormItem from 'view/cycle/autocomplete/cycleAutocompleteFormItem';
import SchoolYearSelectFormItem from 'view/schoolYear/autocomplete/schoolYearSelectFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.id,
  fields.created_at,
  fields.updated_at,
  fields.createdAtRange,
]);

class EducDirectorCycleListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch(this.initialFilter()));
  }

  initialFilter = () => {
    return schema.initialValues(
      this.props.filter,
      this.props.location,
    );
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
                    <SchoolYearSelectFormItem
                      name={fields.schoolYear.name}
                      label={fields.schoolYear.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <EducDirectorAutocompleteFormItem
                      name={fields.educDirector.name}
                      label={fields.educDirector.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <CycleAutocompleteFormItem
                      name={fields.cycle.name}
                      label={fields.cycle.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <DatePickerFormItem
                      name={fields.created_at.name}
                      label={fields.created_at.label}
                      layout={formItemLayout}
                      showTime
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <DatePickerFormItem
                      name={fields.updated_at.name}
                      label={fields.updated_at.label}
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
                      {i18n('common.search')}
                    </Button>
                    <Button
                      loading={loading}
                      onClick={() => this.handleReset(form)}
                      icon="undo"
                    >
                      {i18n('common.reset')}
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

export default withRouter(
  connect(select)(EducDirectorCycleListFilter),
);
