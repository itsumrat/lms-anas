import React, { Component } from "react";
import AutocompleteFormItem from "view/shared/form/items/AutocompleteFormItem";
import CourseStudentsService from "modules/courseStudents/courseStudentsService";
import SelectFormItem from "view/shared/form/items/SelectFormItem";

class CourseStudentsSelectFormItem extends Component {
  state = {
    data: null,
  };
  fetchFn = (value) => {
    return CourseStudentsService.listSelect(10);
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
            label: item.name,
          }))}
        />
      );
    } else {
      return <div></div>;
    }
  }
}

export default CourseStudentsSelectFormItem;
