import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import WeekService from 'modules/week/weekService';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

class WeekSelectFormItem extends Component {
  state = {
    data: null,
  };
  fetchFn = (value) => {
    var { schoolYear } = this.props;
    this.setState({ data: null });

    if (typeof {} == typeof schoolYear) {
      return WeekService.listSelect(schoolYear.id);
    }
    return WeekService.listSelect(schoolYear);
  };
  componentWillMount = () => {
    this.fetchFn().then((data) => {
      this.setState({ data: data });
    });
  };

  componentDidUpdate(previousProps, previousState) {
    if (
      previousProps.schoolYear !== this.props.schoolYear
    ) {
      this.props.update(this.props.name, '');
      this.fetchFn().then((data) => {
        this.setState({ data: data });
      });
    }
  }

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

export default WeekSelectFormItem;
