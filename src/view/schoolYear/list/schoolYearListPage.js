import React, { Component } from "react";
import SchoolYearListFilter from "view/schoolYear/list/schoolYearListFilter";
import SchoolYearListTable from "view/schoolYear/list/schoolYearListTable";
import SchoolYearListToolbar from "view/schoolYear/list/schoolYearListToolbar";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import { i18n } from "i18n";

class SchoolYearListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[[i18n("home.menu"), "/"], [i18n("entities.SchoolYear.menu")]]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.SchoolYear.list.title")}</PageTitle>

          <SchoolYearListToolbar />
          <SchoolYearListFilter />
          <SchoolYearListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(SchoolYearListPage);
