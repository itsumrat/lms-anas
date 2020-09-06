import React, { Component } from 'react';
import Roles from 'security/roles';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './livePage.css';
import selectors from 'modules/roomSession/live/roomSessionLiveSelectors';
import selectorsAuth from 'modules/auth/authSelectors';
import { connect } from 'react-redux';

class StudentContainer extends Component {
  render() {
    if (this.props.event) {
      return (
        <div className="border-primary columniii">
          <div
            style={{
              position: 'relative',
              textAlign: 'center',
            }}
          >
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
                height="180px"
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
                height="180px"
              />
            )}
            <div
              style={{
                position: 'absolute',
                top: '1px',
                right: '1px',
                background: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              <button
                // onClick={this.RoomSlash}
                style={{
                  backgroundColor: 'Transparent',
                  backgroundRepeat: 'no-repeat',
                  border: 'none',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  outline: 'none',
                  fontSize: '12px',
                }}
              >
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  className="btn1"
                  style={{ fontSize: '20px' }}
                />
              </button>
            </div>
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <b> test testtest </b>
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

export default connect(select)(StudentContainer);
