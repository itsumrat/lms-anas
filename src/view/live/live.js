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
import LiveButtons from './liveButtons';
import DashboardContainer from './dashboardContainer';
import TeacherContainer from './teacherContainer';
import StudentContainer from './studentContainer';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
// import CanvasDesigne from './RTC/canvasDesigne';
import './livePage.css';
import MultiStreamsMixer from 'multistreamsmixer';

class LiveStream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherEvents: null,
      Otherevents: [],
      connection: null,
      CurrentEvent: {},
      imageUser: null,
      getStreamcanvas: null,
    };
  }

  updateCurrentStream = (newStream) => {
    this.setState((prevState) => ({
      CurrentEvent: {
        // object that we want to update
        ...prevState.CurrentEvent, // keep all other key-value pairs
        stream: newStream, // update the value of specific key
      },
    }));
  };
  getStream = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const img = this.refs.image;

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = '40px Courier';
      ctx.fillText('Empty Stream', 210, 75);
    };
    var canvasObject = document.querySelector('canvas');
    var stream = canvasObject.captureStream(25);

    return stream;
  };
  mixStream = (stream1, stream2) => {
    stream1.fullcanvas = true;
    stream1.width = 3840;
    stream1.height = 2160;

    stream2.width = parseInt((20 / 100) * stream1.width);
    stream2.height = parseInt((20 / 100) * stream1.height);
    stream2.top = stream2.height - stream2.height;
    stream2.left = stream2.width - stream2.width;

    const mixer = new MultiStreamsMixer([stream1, stream2]);

    mixer.frameInterval = 1;
    mixer.startDrawingFrames();

    var streamMixer = mixer.getMixedStream();
    return streamMixer;
  };

  getStreamCamera = async (
    constraint = { audio: true, video: true },
  ) => {
    let captureStream = null;

    try {
      captureStream = await navigator.mediaDevices.getUserMedia(
        constraint,
      );
    } catch (err) {
      console.error('Error: ' + err);
    }
    return captureStream;
  };

  componentDidMount = async () => {
    var {
      FullName,
      CurrentUser,
      LiveAdminAccess,
      LiveAccess,
      UserRole,
      Room,
    } = this.props;
    var image = CurrentUser.avatar_url;
    this.setState({ imageUser: image });
    Room = 'testzackprod';
    var RTC = new ControllerRtc(config.rtcServer);
    RTC.connection.userid = CurrentUser.user_id;

    RTC.connection.extra = {
      fullName: FullName,
    };
    try {
      let res = await this.getStreamCamera({
        audio: true,
        video: true,
      });
    } catch (e) {}
    /* use the stream */

    RTC.connection.DetectRTC.load(async () => {
      if (
        (!RTC.connection.DetectRTC.hasWebcam ||
          !RTC.connection.DetectRTC
            .isWebsiteHasWebcamPermissions) &&
        (!RTC.connection.DetectRTC
          .isWebsiteHasMicrophonePermissions ||
          !RTC.connection.DetectRTC.hasMicrophone)
      ) {
        RTC.connection.dontCaptureUserMedia = true;

        var stream = this.getStream();
        this.setState({ getStreamcanvas: stream });
        RTC.connection.addStream(stream);
        RTC.connection.replaceTrack(stream);
        this.updateCurrentStream(stream);
        // RTC.connection.mediaConstraints.video = false;
        // RTC.connection.session.video = false;
        // RTC.connection.mediaConstraints.audio = false;
        // RTC.connection.session.audio = false;
      } else if (
        (!RTC.connection.DetectRTC.hasWebcam ||
          !RTC.connection.DetectRTC
            .isWebsiteHasWebcamPermissions) &&
        (RTC.connection.DetectRTC
          .isWebsiteHasMicrophonePermissions ||
          RTC.connection.DetectRTC.hasMicrophone)
      ) {
        // RTC.connection.dontCaptureUserMedia = true;

        // var stream1 = this.getStream();
        // this.setState({ getStreamcanvas: stream1 });

        // var stream2 = await this.getStreamCamera({
        //   audio: true,
        //   video: false,
        // });

        // var mixstream = this.mixStream(stream1, stream2);

        // RTC.connection.addStream(mixstream);
        // this.updateCurrentStream(mixstream);

        RTC.connection.mediaConstraints.video = false;
        RTC.connection.session.video = false;
      } else if (
        !RTC.connection.DetectRTC
          .isWebsiteHasMicrophonePermissions ||
        (!RTC.connection.DetectRTC.hasMicrophone &&
          (RTC.connection.DetectRTC.hasWebcam ||
            RTC.connection.DetectRTC))
      ) {
        // RTC.connection.dontCaptureUserMedia = true;

        // var stream = await this.getStreamCamera({
        //   audio: false,
        //   video: true,
        // });
        // RTC.connection.addStream(stream);
        // RTC.connection.replaceTrack(stream);
        // this.updateCurrentStream(stream);
        RTC.connection.mediaConstraints.audio = false;
        RTC.connection.session.audio = false;
      }

      if (UserRole == Roles.values.teacher) {
        RTC.connection.openOrJoin(
          Room,
          (isRoomExist, roomid, error) => {
            RTC.connection.setCustomSocketEvent(
              'closeRoom',
            );
            RTC.connection.setCustomSocketEvent(
              'dashboardDrawing',
            );
          },
        );
      } else {
        RTC.connection.join(
          Room,
          (isRoomExist, roomid, error) => {
            RTC.connection.socket.on('closeRoom', function (
              message,
            ) {
              this.Disconnect();
            });
            if (error) {
              alert(' classe Fermée !! ');
              getHistory().push('/');
            }
          },
        );
      }
    });

    RTC.connection.onstream = async (event) => {
      if (event.userid == CurrentUser.user_id) {
        this.setState({ CurrentEvent: event });
      } else {
        let data = await RoomSessionService.getUsername(
          event.userid,
        );

        event.role = data.role;
        if (data.role == Roles.values.teacher) {
          this.setState({ teacherEvents: event });
        } else {
          var events = this.state.Otherevents;

          events.push(event);
          this.setState({ events: events });
        }
      }
    };

    RTC.connection.onstreamended = (event) => {
      if (event.role == Roles.values.teacher) {
        this.setState({ teacherEvents: null });
      } else {
        var events = this.state.Otherevents;
        let index = events.findIndex((ev) => {
          return ev.streamid == event.streamid;
        });
        if (index >= 0) {
          events.splice(index, 1);
          this.setState({ events });
        } else {
        }
      }
    };

    RTC.connection.onmute = function (e) {
      return;
    };

    // if local or remote stream is unmuted
    RTC.connection.onunmute = function (e) {
      return;
    };

    this.setState({ connection: RTC.connection });
  };

  render() {
    var {
      FullName,
      CurrentUser,
      LiveAdminAccess,
      LiveAccess,
      UserRole,
      Room,
    } = this.props;
    if (
      this.state.connection &&
      (this.state.teacherEvents ||
        this.state.CurrentEvent ||
        this.state.Otherevents)
    ) {
      return (
        <React.Fragment>
          <canvas
            ref="canvas"
            width={640}
            height={425}
            style={{ display: 'none' }}
          />
          <img
            ref="image"
            src={this.state.imageUser}
            style={{ display: 'none' }}
          />

          <div
            className="embed-responsive embed-responsive-16by9"
            style={{
              position: 'fixed',
              right: 0,
              bottom: 0,
              minWidth: '100%',
              minHeight: '100%',
            }}
          >
            {UserRole == Roles.values.teacher ? (
              <TeacherContainer
                event={this.state.CurrentEvent}
                updateCurrentStream={
                  this.updateCurrentStream
                }
              />
            ) : (
              <TeacherContainer
                event={this.state.teacherEvents}
                updateCurrentStream={
                  this.updateCurrentStream
                }
              />
            )}
          </div>

          <div
            style={{
              position: 'fixed',
              bottom: 0,
              width: '100%',
            }}
          >
            {/* Buttons */}

            <LiveButtons
              connection={this.state.connection}
              updateCurrentStream={this.updateCurrentStream}
              stream={this.state.CurrentEvent.stream}
              getStreamcanvas={this.state.getStreamcanvas}
              mixStream={this.mixStream}
              getStreamCamera={this.getStreamCamera}
            />

            {/* Etudiant */}

            <br />
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
              }}
            >
              <div className="riwww">
                {UserRole == Roles.values.student ? (
                  <StudentContainer
                    event={this.state.CurrentEvent}
                    key={0}
                  />
                ) : (
                  <div></div>
                )}
                {this.state.Otherevents.map((e, index) => (
                  <StudentContainer event={e} key={index} />
                ))}
              </div>
            </div>
          </div>
          <DashboardContainer
            connection={this.state.connection}
            updateCurrentStream={this.updateCurrentStream}
          />
        </React.Fragment>
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

export default connect(select)(LiveStream);
