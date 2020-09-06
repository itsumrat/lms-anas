import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import MatterService from 'modules/matter/matterService';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

class MatterSelectFormItem extends Component {
  state = {
    data: null,
  };
  fetchFn = (value) => {
    return MatterService.listSelect(10);
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

export default MatterSelectFormItem;
