import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import TimeTableTeacherService from 'modules/timeTableTeacher/timeTableTeacherService';

class TimeTableTeacherAutocompleteFormItem extends Component {
  fetchFn = (value) => {
    return TimeTableTeacherService.listAutocomplete(
      value,
      10,
    );
  };

  mapper = {
    toAutocomplete(value) {
      if (!value) {
        return undefined;
      }

      const key = value.id;
      let label = value.label;

      if (value['id']) {
        label = value['name'];
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
        nameRead={'name'}
        {...this.props}
        fetchFn={this.fetchFn}
        mapper={this.mapper}
      />
    );
  }
}

export default TimeTableTeacherAutocompleteFormItem;
