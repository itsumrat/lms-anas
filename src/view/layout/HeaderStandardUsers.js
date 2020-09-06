import {
  Icon,
  Layout,
  Menu,
  Dropdown,
  Avatar,
  Button,
  Menu as AntMenu,
} from 'antd';
import authActions from 'modules/auth/authActions';
import authSelectors from 'modules/auth/authSelectors';
import layoutActions from 'modules/layout/layoutActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from 'view/layout/styles/HeaderWrapper';
import layoutSelectors from 'modules/layout/layoutSelectors';
import { i18n } from 'i18n';
import I18nSelect from 'view/layout/I18nSelect';
import { getHistory } from 'modules/store';
import { createFromIconfontCN } from '@ant-design/icons';
import './header_standard_users.styles.scss';
import routes from 'view/routes';
import { Link } from 'react-router-dom';
import PermissionChecker from 'modules/auth/permissionChecker';

const { Header: AntHeader } = Layout;

class HeaderStandardUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDropdown: false,
    };
  }

  get selectedKeys() {
    const url = this.props.url;
    //
    const match = routes.privateRoutes.find((option) => {
      return url === option.path;
    });

    if (match) {
      return [match.path];
    }

    return null;
  }

  match = (permission) => {
    const permissionChecker = new PermissionChecker(
      this.props.currentUser,
    );

    //

    return permissionChecker.match(permission);
  };

  doSignout = () => {
    const { dispatch } = this.props;
    dispatch(authActions.doSignout());
  };

  doNavigateToProfile = () => {
    getHistory().push('/profile');
  };

  doNavigateToEditPass = () => {
    getHistory().push('/editpassword');
  };

  userMenu = (
    <Menu selectedKeys={[]}>
      <Menu.Item
        onClick={this.doNavigateToProfile}
        key="userCenter"
      >
        <Icon type="user" />
        {i18n('auth.profile.title')}
      </Menu.Item>

      <Menu.Item
        onClick={this.doNavigateToEditPass}
        key="userPassword"
      >
        <Icon type="file-protect" />
        {i18n('auth.editpassword.title')}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={this.doSignout} key="logout">
        <Icon type="logout" />
        {i18n('auth.signout')}
      </Menu.Item>
    </Menu>
  );

  render() {
    const { userDropdown } = this.state;
    return (
      <div className="course-header">
        <div className="logo_container">
          <Link to="/">
            {/* <img src="img_url" alt="Logo"/> */}
            <h2 style={{ color: 'white' }}>
              {i18n('app.title')}
            </h2>
          </Link>
        </div>
        <div className="back-to-dashboard_container">
          <AntMenu
            selectedKeys={this.selectedKeys}
            mode="horizontal"
            theme="dark"
            style={{
              backgroundColor: 'transparent',
            }}
          >
            {routes.privateRoutes
              .filter((privateRoute) => !!privateRoute.menu)
              .filter((privateRoutes) =>
                this.match(
                  privateRoutes.permissionRequired,
                ),
              )
              .map((privateRoute) => (
                <AntMenu.Item key={privateRoute.path}>
                  <Link to={privateRoute.path}>
                    {/* <Icon type={privateRoute.icon} /> */}
                    <span>{privateRoute.label}</span>
                  </Link>
                </AntMenu.Item>
              ))}
          </AntMenu>
        </div>
        <div className="right-panel">
          <div>
            <span className="i18n-select">
              <I18nSelect />
            </span>
          </div>
          <div className="username_container">
            <h5
              onClick={() =>
                this.setState({
                  userDropdown: !this.state.userDropdown,
                })
              }
            >
              <span>
                <Avatar
                  className="user-dropdown-avatar"
                  size="small"
                  src={
                    this.props.userDropdownAvatar ||
                    undefined
                  }
                  alt="avatar"
                />
                &nbsp;&nbsp;
                <span
                  className="user-dropdown-text"
                  style={{ color: 'white' }}
                >
                  {this.props.userDropdownText}
                </span>
              </span>
            </h5>
            <div
              className="user-dropdown"
              style={
                userDropdown
                  ? {
                      transform: 'scaleY(1)',
                      transition: '.2s',
                    }
                  : {
                      transform: 'scaleY(0)',
                      transition: '.2s',
                    }
              }
            >
              <Menu
                selectedKeys={[]}
                style={{
                  backgroundColor: '#273044',
                  color: 'white',
                }}
              >
                <Menu.Item
                  onClick={this.doNavigateToProfile}
                  key="userCenter"
                >
                  <Icon type="user" />
                  {i18n('auth.profile.title')}
                </Menu.Item>

                <Menu.Item
                  onClick={this.doNavigateToEditPass}
                  key="userPassword"
                >
                  <Icon type="file-protect" />
                  {i18n('auth.editpassword.title')}
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  onClick={this.doSignout}
                  key="logout"
                >
                  <Icon type="logout" />
                  {i18n('auth.signout')}
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const select = (state) => ({
  menuVisible: layoutSelectors.selectMenuVisible(state),
  currentUser: authSelectors.selectCurrentUser(state),
  userDropdownText: authSelectors.selectCurrentUserNameOrEmailPrefix(
    state,
  ),
  userDropdownAvatar: authSelectors.selectCurrentUserAvatar(
    state,
  ),
});

export default connect(select)(HeaderStandardUsers);
