import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectors from 'modules/levelSector/levelSectorSelectors';

class LevelSectorListItem extends Component {
  valueAsArray = () => {
    const { value } = this.props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  displayableRecord = (record) => {
    if (this.props.hasPermissionToRead) {
      return (
        <div key={record.id}>
          <Link to={`/levelSector/${record.id}`}>
            {record.last_name} &nbsp; {record.first_name}
          </Link>
        </div>
      );
    }

    return (
      <div key={record.id}>
        {record.last_name} &nbsp; {record.first_name}
      </div>
    );
  };

  render() {
    if (!this.valueAsArray().length) {
      return null;
    }

    return this.valueAsArray().map((value) =>
      this.displayableRecord(value),
    );
  }
}

LevelSectorListItem.propTypes = {
  value: PropTypes.any,
};

const select = (state) => ({
  hasPermissionToRead: selectors.selectPermissionToRead(
    state,
  ),
});

export default connect(select)(LevelSectorListItem);
