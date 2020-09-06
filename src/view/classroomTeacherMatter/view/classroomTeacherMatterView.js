import model from 'modules/classroomTeacherMatter/classroomTeacherMatterModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import FilesViewItem from 'view/shared/view/FilesViewItem';

const { fields } = model;

class ClassroomTeacherMatterView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record[0].id)}
        />

        <TextViewItem
          label={fields.teachers.label}
          value={fields.teachers.forView(
            record[0].teacher.first_name +
              ' ' +
              record[0].teacher.last_name,
          )}
        />

        <TextViewItem
          label={fields.classroom.label}
          value={fields.classroom.forView(
            record[0].classroom.level_sector.level.cycle
              .name +
              ' ' +
              record[0].classroom.level_sector.sector.name +
              ' ' +
              record[0].classroom.level_sector.level.name +
              ' ' +
              record[0].classroom.name,
          )}
        />

        <TextViewItem
          label={fields.matter.label}
          value={fields.matter.forView(
            record[0].matter.name,
          )}
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

export default ClassroomTeacherMatterView;
