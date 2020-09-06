import { Layout as AntLayout } from 'antd';
import Permissions from 'security/permissions';
import PermissionChecker from 'modules/auth/permissionChecker';
import React, { Component } from 'react';
import Header from 'view/layout/Header';
import HeaderStandardUsers from 'view/layout/HeaderStandardUsers';
import LayoutWrapper from 'view/layout/styles/LayoutWrapper';
import Menu from 'view/layout/Menu';

const { Content } = AntLayout;
const permissions = Permissions.values;

const Layout = (WrappedComponent) =>
  class extends Component {
    render() {
      let { currentUser } = this.props;
      const permissionChecker = new PermissionChecker(
        currentUser,
      );
      if (
        permissionChecker.match(permissions.Standard_users)
      ) {
        return (
          <LayoutWrapper>
            <AntLayout>
              <HeaderStandardUsers
                url={this.props.match.url}
              />

              <Content>
                <WrappedComponent {...this.props} />
              </Content>
            </AntLayout>
          </LayoutWrapper>
        );
      } else {
        return (
          <LayoutWrapper>
            <Menu url={this.props.match.url} />

            <AntLayout>
              <Header />

              <Content>
                <WrappedComponent {...this.props} />
              </Content>
            </AntLayout>
          </LayoutWrapper>
        );
      }
    }
  };

export default Layout;
