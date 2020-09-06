import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from 'view/layout/Layout';

import { i18n } from 'i18n';
import Live from './live';
//import LiveAdmin from './liveAdmin';
import { connect } from 'react-redux';
import actions from 'modules/roomSession/live/roomSessionLiveActions';
import selectors from 'modules/roomSession/live/roomSessionLiveSelectors';
class ControlerLive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: null,
    };
  }

  componentWillMount = async () => {
    var { dispatch } = this.props;
    // dispatch(actions.doOpenRoom());
  };

  render() {
    var {
      LiveAccess,
      LiveAdminAccess,
      loading,
      Room,
    } = this.props;


    // if (Room) {
    if (LiveAccess) return <Live />;
    // if (LiveAdminAccess) return <LiveAdmin />;

    return <div></div>;
    // return
    // } else {
    // return <div></div>;
    // }
  }
}

function select(state) {
  return {
    LiveAccess: selectors.selectPermissionToLive(state),
    LiveAdminAccess: selectors.selectPermissionToLiveAdmin(
      state,
    ),
    loading: selectors.SelectLoading(state),
    Room: selectors.SelectRoom(state),
  };
}
export default connect(select)(ControlerLive);
