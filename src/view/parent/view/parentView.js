import model from 'modules/parent/parentModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import FilesViewItem from 'view/shared/view/FilesViewItem';

const { fields } = model;

class ParentView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record[0].id)}
        />

        <TextViewItem
          label={fields.first_name.label}
          value={fields.first_name.forView(
            record[0].first_name,
          )}
        />

        <TextViewItem
          label={fields.last_name.label}
          value={fields.last_name.forView(
            record[0].last_name,
          )}
        />

        <TextViewItem
          label={fields.email.label}
          value={fields.email.forView(record[0].user.email)}
        />

        <TextViewItem
          label={fields.phone.label}
          value={fields.phone.forView(record[0].user.phone)}
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

export default ParentView;
