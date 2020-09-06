import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import ClassroomService from 'modules/classroom/classroomService';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

class ClassroomSelectFormItem extends Component {
  state = {
    data: null,
  };
  fetchFn = (value) => {
    var { sector, level } = this.props;
    this.setState({ data: null });

    if (
      typeof {} == typeof level &&
      typeof {} == typeof sector
    ) {
      return ClassroomService.listSelect(
        level.id,
        sector.id,
      );
    }
    return ClassroomService.listSelect(level, sector);
  };
  componentWillMount = () => {
    this.fetchFn().then((data) => {
      this.setState({ data: data });
    });
  };

  componentDidUpdate(previousProps, previousState) {
    if (
      previousProps.sector !== this.props.sector ||
      previousProps.level !== this.props.level
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

export default ClassroomSelectFormItem;
