import React, { Component } from "react";
import WeekListFilter from "view/week/list/weekListFilter";
import WeekListTable from "view/week/list/weekListTable";
import WeekListToolbar from "view/week/list/weekListToolbar";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import { i18n } from "i18n";

class WeekListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[[i18n("home.menu"), "/"], [i18n("entities.Week.menu")]]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.Week.list.title")}</PageTitle>

          <WeekListToolbar />
          <WeekListFilter />
          <WeekListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(WeekListPage);
