import model from 'modules/framerMatterCycle/framerMatterCycleModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';

const { fields } = model;

class FramerMatterCycleView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record[0].id)}
        />

        <TextViewItem
          label={fields.framer.label}
          value={fields.framer.forView(
            <div>
              {' '}
              {record[0].framer.last_name}{' '}
              {record[0].framer.first_name}{' '}
            </div>,
          )}
        />

        <TextViewItem
          label={fields.matter.label}
          value={fields.matter.forView(
            record[0].matter.name,
          )}
        />

        <TextViewItem
          label={fields.cycle.label}
          value={fields.cycle.forView(record[0].cycle.name)}
        />

        <TextViewItem
          label={fields.created_at.label}
          value={fields.created_at.forView(
            record[0].created_at,
          )}
        />

        <TextViewItem
          label={fields.updated_at.label}
          value={fields.updated_at.forView(
            record[0].updated_at,
          )}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default FramerMatterCycleView;
