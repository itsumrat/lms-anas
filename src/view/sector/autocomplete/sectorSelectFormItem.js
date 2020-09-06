import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import SectorService from 'modules/sector/sectorService';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

class SectorSelectFormItem extends Component {
  state = {
    data: null,
  };
  fetchFn = (value) => {
    let { constraint } = this.props;
    this.setState({ data: null });
    return SectorService.listSelect(
      constraint
        ? constraint.name
          ? constraint.id
          : constraint
        : constraint,
    );
  };
  componentWillMount = () => {
    this.fetchFn().then((data) => {
      this.setState({ data: data });
    });
  };

  componentDidUpdate(previousProps, previousState) {
    if (
      previousProps.constraint !== this.props.constraint
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

export default SectorSelectFormItem;
