import React, { Component } from 'react';
import Roles from 'security/roles';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './livePage.css';
import selectors from 'modules/roomSession/live/roomSessionLiveSelectors';
import selectorsAuth from 'modules/auth/authSelectors';
import { connect } from 'react-redux';

class TeacherContainer extends Component {
  render() {
    // var { event, key } = this.props;

    // var role = event.role;

    //
    if (this.props.event) {
      return (
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <div className="row">
            {' '}
            <h2> Nom Prof </h2>{' '}
          </div>

          <div className="row" id="videos-container">
            {this.props.event.userid ==
            this.props.CurrentUser.user_id ? (
              <ReactPlayer
                // Disable download button
                config={{
                  file: {
                    attributes: {
                      controlsList: 'nodownload',
                    },
                  },
                }}
                // Disable right click
                onContextMenu={(e) => e.preventDefault()}
                url={this.props.event.stream}
                muted
                playing
                width="100%"
                height="100%"
              />
            ) : (
              <ReactPlayer
                // Disable download button
                config={{
                  file: {
                    attributes: {
                      controlsList: 'nodownload',
                    },
                  },
                }}
                // Disable right click
                onContextMenu={(e) => e.preventDefault()}
                url={this.props.event.stream}
                playing
                controls
                width="100%"
                height="100%"
              />
            )}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
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

export default connect(select)(TeacherContainer);
