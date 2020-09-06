import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import LevelSectorService from 'modules/levelSector/levelSectorService';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

class LevelSectorSelectFormItem extends Component {
  state = {
    data: null,
  };
  fetchFn = (value) => {
    return LevelSectorService.listSelect(10);
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
            // label: item.first_name + ' ' + item.last_name,
            label: `${item.first_name} ${item.last_name}`,
          }))}
        />
      );
    } else {
      return <div></div>;
    }
  }
}

export default LevelSectorSelectFormItem;
