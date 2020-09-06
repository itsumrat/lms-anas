import React, { Component } from "react";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import { i18n } from "i18n";
import importerHoc from "view/shared/importer/Importer";
import selectors from "modules/element/importer/elementImporterSelectors";
import actions from "modules/element/importer/elementImporterActions";
import fields from "modules/element/importer/elementImporterFields";

class ElementImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n("entities.Element.importer.hint")
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n("home.menu"), "/"],
            [i18n("entities.Element.menu"), "/Element"],
            [i18n("entities.Element.importer.title")],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.Element.importer.title")}</PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(ElementImportPage);
