import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import TeachersService from 'modules/teachers/teachersService';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

class TeacherSelecteFormItem extends Component {
  state = {
    data: null,
  };
  fetchFn = (value) => {
    return TeachersService.listSelect(10);
  };
  componentDidMount = () => {
    this.fetchFn().then((data) => {
      this.setState({ data: data });
    });
  };

  render() {
    if (this.state.data) {
      return (
        <SelectFormItem
          {...this.props}
          options={this.state.data.map((item) => ({
            value: item.id,
            label: `${item.first_name} ${item.last_name}`,
          }))}
        />
      );
    } else {
      return <div></div>;
    }
  }
}

export default TeacherSelecteFormItem;
