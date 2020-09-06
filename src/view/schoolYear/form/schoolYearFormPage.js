import React, { Component } from "react";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import SchoolYearForm from "view/schoolYear/form/schoolYearForm";
import { i18n } from "i18n";

class SchoolYearFormPage extends Component {
  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  title = () => {
    return this.isEditing()
      ? i18n("entities.SchoolYear.edit.title")
      : i18n("entities.SchoolYear.new.title");
  };

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n("home.menu"), "/"],
            [i18n("entities.SchoolYear.menu"), "/schoolYear"],
            [this.title()],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{this.title()}</PageTitle>

          <SchoolYearForm match={this.props.match} />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(SchoolYearFormPage);
