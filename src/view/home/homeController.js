import Permissions from 'security/permissions';
import PermissionChecker from 'modules/auth/permissionChecker';
import HomePage from './HomePage';
import HomeAdmin from './homeAdmin';
import HomeProf from './HomeProf';
import HomeFramer from './HomeFramer';
import HomeParent from './HomeParent';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Layout from 'view/layout/Layout';
import './homeAdmin.css';

const permissions = Permissions.values;

class HomeController extends PureComponent {
  handleLive = () => {
    this.props.history.push({
      pathname: '/listclasses',
    });
  };

  render() {
    let { currentUser } = this.props;
    const permissionChecker = new PermissionChecker(
      currentUser,
    );
    if (permissionChecker.match(permissions.HomePage)) {
      return <HomePage />
    } else {
      if (permissionChecker.match(permissions.HomeAdmin)) {
        return <HomeAdmin />
      } else {
        if(permissionChecker.match(permissions.HomeProf)) {
          return <HomeProf />
        } else {
          if(permissionChecker.match(permissions.HomeParent)) {
            return <HomeParent />
          } else {
            if(permissionChecker.match(permissions.HomeFramer)) {
              return <HomeFramer />
            }
          }
        }
      }
    }
  }
}

function select(state) {
  var currentUser = state.auth.currentUser;
  return {
    currentUser,
  };
}

export default connect(select)(Layout(HomeController));
