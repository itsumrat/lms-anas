import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import ElementService from 'modules/element/elementService';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

class ElementSelectFormItem extends Component {
  state = {
    data: null,
  };
  fetchFn = (value) => {
    var { sector, level, matter } = this.props;
    this.setState({ data: null });

    if (
      typeof {} == typeof level &&
      typeof {} == typeof sector &&
      typeof {} == typeof matter
    ) {
      return ElementService.listSelect(
        matter.id,
        level.id,
        sector.id,
      );
    }
    return ElementService.listSelect(matter, level, sector);
  };
  componentWillMount = () => {
    this.fetchFn().then((data) => {
      this.setState({ data: data });
    });
  };

  componentDidUpdate(previousProps, previousState) {
    if (
      previousProps.sector !== this.props.sector ||
      previousProps.level !== this.props.level ||
      previousProps.matter !== this.props.matter
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

export default ElementSelectFormItem;
