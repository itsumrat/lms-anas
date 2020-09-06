import React, { Component } from 'react';
import config from 'config';
import ControllerRtc from './RTC/rtcMulticonnection';
import selectors from 'modules/roomSession/live/roomSessionLiveSelectors';
import selectorsAuth from 'modules/auth/authSelectors';
import Roles from 'security/roles';
import { connect } from 'react-redux';
import RoomSessionService from 'modules/roomSession/roomSessionService';
import { getHistory } from 'modules/store';
import UserContainer from './userContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CanvasDesigne from './RTC/canvasDesigne';

import {
  faPhoneSlash,
  faMicrophoneAlt,
  faMicrophoneAltSlash,
  faVolumeMute,
  faVolumeUp,
  faShareSquare,
  faRecordVinyl,
  faVideoSlash,
  faVideo,
  faChalkboard,
  faComments,
  faExpand,
  faHandPointer,
  faRedoAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';
// import CanvasDesigne from './RTC/canvasDesigne';
import './livePage.css';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    var { connection } = this.props;
    this.state = {
      modal1Visible: false,
    };
  }

  setModal1Visible(visible) {
    this.setState({ modal1Visible: visible });
  }

  handleCancel = () => {
    this.setState({ modal1Visible: false });
  };

  render() {
    return (
      <div>
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
          }}
        >
          <button
            className="btn btn-info"
            onClick={() => {
              this.setModal1Visible(true);
            }}
          >
            <FontAwesomeIcon
              icon={faChalkboard}
              className="btn1"
              style={{ fontSize: '20px' }}
              color="red"
            />
            <h6>
              {' '}
              <b> Tableau </b>{' '}
            </h6>
          </button>
        </div>

        <Modal
          title="Tableau"
          style={{ top: 20 }}
          visible={this.state.modal1Visible}
          footer={null}
          onCancel={this.handleCancel}
          width="90%"
        >
          <CanvasDesigne {...this.props} />
        </Modal>
      </div>
    );
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
    CurrentUser: selectorsAuth.selectCurrentUser(state),
    FullName: selectorsAuth.selectCurrentUserFullName(
      state,
    ),
    UserRole: selectorsAuth.selectRoles(state),
  };
}

export default connect(select)(DashboardContainer);
