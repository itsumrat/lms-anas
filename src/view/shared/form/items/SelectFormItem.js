import React, { Component } from 'react';
import { Form, Select, Tooltip, Icon } from 'antd';
import { formItemLayout } from 'view/shared/styles/FormWrapper';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';

class SelectFormItemNotFast extends Component {
  _value = () => {
    var { name, form, type, options } = this.props;

    if (type == 'enumerator' && form.values[name]) {
      let value = options.filter(
        (item) => item.value == form.values[name],
      );
      return value[0].label;
    }

    return form.values[name] != null &&
      form.values[name].name != null
      ? form.values[name].name
      : form.values[name];
  };

  render() {
    const {
      label,
      name,
      form,
      hint,
      layout,
      size,
      placeholder,
      options,
      mode,
      autoFocus,
      autoComplete,
      prefix,
      formItemProps,
      inputProps,
      errorMessage,
      required,
      info,
    } = this.props;
    var suffix = null;
    if (info != undefined) {
      suffix = (
        <Tooltip title={info}>
          <Icon
            type="info-circle"
            style={{ color: 'rgba(0,0,0,.45)' }}
          />
        </Tooltip>
      );
    }
    // if (form.values[name] != null) {
    //   if (form.values[name].hasOwnProperty('user')) {
    //     form.values[name] = form.values[name].user;
    //   }
    // }

    return (
      <Form.Item
        {...layout}
        label={label}
        labelAlign="left"
        validateStatus={FormErrors.validateStatus(
          form,
          name,
          errorMessage,
        )}
        required={required}
        help={
          FormErrors.displayableError(
            form,
            name,
            errorMessage,
          ) || hint
        }
        {...formItemProps}
      >
        <Select
          id={name}
          onChange={(value) =>
            form.setFieldValue(name, value)
          }
          onBlur={() => form.setFieldTouched(name)}
          value={this._value()}
          size={size || undefined}
          placeholder={placeholder || undefined}
          autoFocus={autoFocus || false}
          autoComplete={autoComplete || undefined}
          prefix={prefix || undefined}
          mode={mode || undefined}
          suffix={suffix}
          allowClear
          {...inputProps}
        >
          {options.map((option) => (
            <Select.Option
              key={option.value}
              value={option.value}
              title={option.label}
            >
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    );
  }
}

SelectFormItemNotFast.defaultProps = {
  layout: formItemLayout,
  required: false,
};

SelectFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  layout: PropTypes.object,
  errorMessage: PropTypes.string,
  formItemProps: PropTypes.object,
  inputProps: PropTypes.object,
  mode: PropTypes.string,
};

class SelectFormItem extends Component {
  constructor() {
    super();
    this.state = { option: null };
  }

  render() {
    let { name } = this.props;
    return this.props.options == null ? (
      <div />
    ) : (
      <FastField
        name={name}
        render={({ form }) => (
          <SelectFormItemNotFast
            {...this.props}
            options={this.props.options || []}
            form={form}
          />
        )}
      />
    );
  }
}

export default SelectFormItem;
