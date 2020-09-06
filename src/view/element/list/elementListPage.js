import React, { Component } from "react";
import ElementListFilter from "view/element/list/elementListFilter";
import ElementListTable from "view/element/list/elementListTable";
import ElementListToolbar from "view/element/list/elementListToolbar";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import { i18n } from "i18n";

class ElementListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[[i18n("home.menu"), "/"], [i18n("entities.Element.menu")]]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.Element.list.title")}</PageTitle>

          <ElementListToolbar />
          <ElementListFilter />
          <ElementListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(ElementListPage);
