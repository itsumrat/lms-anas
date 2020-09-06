import React, { Component } from "react";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import { i18n } from "i18n";
import importerHoc from "view/shared/importer/Importer";
import selectors from "modules/timeTableTeacher/importer/timeTableTeacherImporterSelectors";
import actions from "modules/timeTableTeacher/importer/timeTableTeacherImporterActions";
import fields from "modules/timeTableTeacher/importer/timeTableTeacherImporterFields";

class TimeTableTeacherImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n("entities.TimeTableTeacher.importer.hint")
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n("home.menu"), "/"],
            [i18n("entities.TimeTableTeacher.menu"), "/TimeTableTeacher"],
            [i18n("entities.TimeTableTeacher.importer.title")],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n("entities.TimeTableTeacher.importer.title")}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(TimeTableTeacherImportPage);
