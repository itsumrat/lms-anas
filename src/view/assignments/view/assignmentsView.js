import model from 'modules/assignments/assignmentsModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import FilesViewItem from 'view/shared/view/FilesViewItem';

const { fields } = model;

class AssignmentsView extends Component {
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
          value={fields.name.forView(record.arrival)}
        />

        <TextViewItem
          label={fields.level.label}
          value={fields.level.forView(
            record.classroom_teacher_matter.classroom
              .level_sector.level.name,
          )}
        />
        <TextViewItem
          label={fields.classroom.label}
          value={fields.classroom.forView(
            record.classroom_teacher_matter.classroom.name,
          )}
        />

        <FilesViewItem
          label={fields.file.label}
          value={fields.file.forView(record.payload)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(
            record.created_at,
          )}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(
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

export default AssignmentsView;
