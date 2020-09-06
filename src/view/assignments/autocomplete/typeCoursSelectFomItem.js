import React, { Component } from 'react';
import AssignmentsService from 'modules/assignments/assignmentsService';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

class TypeCoursSelectFormItem extends Component {
  state = {
    data: null,
  };

  render() {
    var option = this.state.option;

    return <SelectFormItem {...this.props} />;
  }
}

export default TypeCoursSelectFormItem;
