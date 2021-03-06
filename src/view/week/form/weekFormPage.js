import React, { Component } from "react";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import WeekForm from "view/week/form/weekForm";
import { i18n } from "i18n";

class WeekFormPage extends Component {
  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  title = () => {
    return this.isEditing()
      ? i18n("entities.Week.edit.title")
      : i18n("entities.Week.new.title");
  };

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n("home.menu"), "/"],
            [i18n("entities.Week.menu"), "/week"],
            [this.title()],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{this.title()}</PageTitle>

          <WeekForm match={this.props.match} />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(WeekFormPage);
