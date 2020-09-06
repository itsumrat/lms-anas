import React, { Component } from "react";
import RegisterListFilter from "view/register/list/registerListFilter";
import RegisterListTable from "view/register/list/registerListTable";
import RegisterListToolbar from "view/register/list/registerListToolbar";
import Layout from "view/layout/Layout";
import ContentWrapper from "view/layout/styles/ContentWrapper";
import PageTitle from "view/shared/styles/PageTitle";
import Breadcrumb from "view/shared/Breadcrumb";
import { i18n } from "i18n";

class RegisterListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[[i18n("home.menu"), "/"], [i18n("entities.Register.menu")]]}
        />

        <ContentWrapper>
          <PageTitle>{i18n("entities.Register.list.title")}</PageTitle>

          <RegisterListToolbar />
          <RegisterListFilter />
          <RegisterListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(RegisterListPage);
