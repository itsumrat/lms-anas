import React, { Component } from "react";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import { i18n } from "i18n";
import importerHoc from "view/shared/importer/Importer";
import selectors from "modules/register/importer/registerImporterSelectors";
import actions from "modules/register/importer/registerImporterActions";
import fields from "modules/register/importer/registerImporterFields";

class RegisterImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n("entities.Register.importer.hint")
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n("home.menu"), "/"],
            [i18n("entities.Register.menu"), "/Register"],
            [i18n("entities.Register.importer.title")],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.Register.importer.title")}</PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(RegisterImportPage);
