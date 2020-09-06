import React, { Component } from "react";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import { i18n } from "i18n";
import importerHoc from "view/shared/importer/Importer";
import selectors from "modules/schoolYear/importer/schoolYearImporterSelectors";
import actions from "modules/schoolYear/importer/schoolYearImporterActions";
import fields from "modules/schoolYear/importer/schoolYearImporterFields";

class SchoolYearImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n("entities.SchoolYear.importer.hint")
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n("home.menu"), "/"],
            [i18n("entities.SchoolYear.menu"), "/SchoolYear"],
            [i18n("entities.SchoolYear.importer.title")],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.SchoolYear.importer.title")}</PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(SchoolYearImportPage);
