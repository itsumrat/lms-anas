import model from 'modules/teachers/teachersModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import FilesViewItem from 'view/shared/view/FilesViewItem';

const { fields } = model;

class TeachersView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.first_name.label}
          value={fields.first_name.forView(
            record.first_name,
          )}
        />

        <TextViewItem
          label={fields.last_name.label}
          value={fields.last_name.forView(record.last_name)}
        />

        <TextViewItem
          label={fields.email.label}
          value={fields.email.forView(record.user.email)}
        />

        <TextViewItem
          label={fields.phone.label}
          value={fields.phone.forView(record.user.phone)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.departure)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(
            record.clientNotes,
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

export default TeachersView;
