import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import AuthService from 'modules/auth/authService';
import model from 'modules/auth/userModel';
const { fields } = model;

class AuthAutocompleteFormItem extends Component {
  fetchFn = (value) => {
    if (this.props.name == fields.timezone.name) {
      return AuthService.listAutocompleteTimeZone(value);
    }
  };

  mapper = {
    toAutocomplete(value) {
      if (!value) {
        return undefined;
      }

      const key = value.id;
      let label = value.label;

      if (value['id']) {
        label = value['label'];
      }

      return {
        key,
        label,
      };
    },

    toValue(value) {
      if (!value) {
        return undefined;
      }

      return {
        id: value.key,
        label: value.label,
      };
    },
  };

  render() {
    return (
      <AutocompleteFormItem
        {...this.props}
        fetchFn={this.fetchFn}
        mapper={this.mapper}
      />
    );
  }
}

export default AuthAutocompleteFormItem;
