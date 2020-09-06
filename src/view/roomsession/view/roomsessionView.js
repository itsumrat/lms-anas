import model from 'modules/roomSession/roomsessionModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import FilesViewItem from 'view/shared/view/FilesViewItem';

const { fields } = model;

class RoomsessionView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record[0].id)}
        />

        <TextViewItem
          label={fields.schoolYear.label}
          value={fields.schoolYear.forView(
            record[0].week.school_year.name,
          )}
        />

        <TextViewItem
          label={fields.week.label}
          value={fields.week.forView(record[0].week.name)}
        />

        <TextViewItem
          label={fields.name.label}
          value={fields.name.forView(record[0].name)}
        />

        <TextViewItem
          label={fields.start_time.label}
          value={fields.start_time.forView(
            record[0].start_time,
          )}
        />

        <TextViewItem
          label={fields.end_time.label}
          value={fields.end_time.forView(
            record[0].end_time,
          )}
        />

        <TextViewItem
          label={fields.day.label}
          value={fields.day.forView(record[0].day)}
        />

        <TextViewItem
          label={fields.matter.label}
          value={fields.matter.forView(
            record[0].classroom_teacher_matter.matter.name,
          )}
        />

        <TextViewItem
          label={fields.element.label}
          value={fields.element.forView(
            record[0].element.name,
          )}
        />

        <TextViewItem
          label={fields.teacher.label}
          value={fields.teacher.forView(
            record[0].classroom_teacher_matter.teacher.user
              .first_name +
              ' ' +
              record[0].classroom_teacher_matter.teacher
                .last_name,
          )}
        />

        <TextViewItem
          label={fields.classroom.label}
          value={fields.classroom.forView(
            record[0].classroom_teacher_matter.classroom
              .level_sector.level.cycle.name +
              ' ' +
              record[0].classroom_teacher_matter.classroom
                .level_sector.sector.name +
              ' ' +
              record[0].classroom_teacher_matter.classroom
                .level_sector.level.name +
              ' ' +
              record[0].classroom_teacher_matter.classroom
                .name,
          )}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(
            record[0].createdAt,
          )}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(
            record[0].updatedAt,
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

export default RoomsessionView;
