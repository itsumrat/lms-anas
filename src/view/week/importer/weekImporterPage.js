import React, { Component } from "react";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import { i18n } from "i18n";
import importerHoc from "view/shared/importer/Importer";
import selectors from "modules/week/importer/weekImporterSelectors";
import actions from "modules/week/importer/weekImporterActions";
import fields from "modules/week/importer/weekImporterFields";

class WeekImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n("entities.Week.importer.hint")
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n("home.menu"), "/"],
            [i18n("entities.Week.menu"), "/Week"],
            [i18n("entities.Week.importer.title")],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.Week.importer.title")}</PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(WeekImportPage);
