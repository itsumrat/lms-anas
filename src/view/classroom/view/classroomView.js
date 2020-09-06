import model from 'modules/classroom/classroomModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import FilesViewItem from 'view/shared/view/FilesViewItem';

const { fields } = model;

class ClassroomView extends Component {
  renderView() {
    const { record } = this.props;
    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.name.label}
          value={fields.name.forView(record.name)}
        />

        <TextViewItem
          label={fields.cycle.label}
          value={fields.cycle.forView(
            record.level_sector.level.cycle.name,
          )}
        />

        <TextViewItem
          label={fields.level.label}
          value={fields.level.forView(
            record.level_sector.level.name,
          )}
        />

        <TextViewItem
          label={fields.sector.label}
          value={fields.sector.forView(
            record.level_sector.sector.name,
          )}
        />
        <TextViewItem
          label={fields.created_at.label}
          value={fields.created_at.forView(
            record.created_at,
          )}
        />

        <TextViewItem
          label={fields.updated_at.label}
          value={fields.updated_at.forView(
            record.updated_at,
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

export default ClassroomView;
