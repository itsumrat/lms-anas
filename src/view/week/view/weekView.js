import model from 'modules/week/weekModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import FilesViewItem from 'view/shared/view/FilesViewItem';

const { fields } = model;

class WeekView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record[0].id)}
        />

        <TextViewItem
          label={fields.name.label}
          value={fields.name.forView(record[0].name)}
        />

        <TextViewItem
          label={fields.schoolYear.label}
          value={fields.schoolYear.forView(
            record[0].schoolYear.name,
          )}
        />

        <TextViewItem
          label={fields.start_date.label}
          value={fields.start_date.forView(
            record[0].start_date,
          )}
        />

        <TextViewItem
          label={fields.start_date.label}
          value={fields.start_date.forView(
            record[0].start_date,
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

export default WeekView;
