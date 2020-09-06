import React, { Component } from 'react';
import config from 'config';
import ControllerRtc from './RTC/rtcMulticonnection';
import selectors from 'modules/roomSession/live/roomSessionLiveSelectors';
import selectorsAuth from 'modules/auth/authSelectors';
import Roles from 'security/roles';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneSlash,
  faMicrophoneAltSlash,
  faShareSquare,
  faVideo,
  faExpand,
  faRedoAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Chat, addResponseMessage } from 'react-chat-popup';
// import CanvasDesigne from './RTC/canvasDesigne';
import { i18n } from 'i18n';
import './livePage.css';
import RecordRTC from 'recordrtc';
import { getHistory } from 'modules/store';
import MultiStreamsMixer from 'multistreamsmixer';

class LiveButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1Visible: false,
      currentStream: null,
      startRecord: false,
      connection: null,
      screenShareIt: false,
      profdatafirstname: '',
      profdatalastname: '',
      muteVoice: false,
      muteVideo: false,
      devicesVideo: [],
      devicesVideoSelected: true,
      currentStreamCamera: null,
      firstCnx: true,
      ButtonCuteVoice: 'rgba(255, 255, 255, 0.5)',
      ButtonMuteVideo: 'rgba(255, 255, 255, 0.5)',
      ChatButtonState: '0',
      IsChatBoxOpened: false,
    };
  }
  componentWillMount = () => {
    let { connection } = this.props;

    let show = this;

    connection.onmessage = async function (e) {
      if (show.state.IsChatBoxOpened) {
        show.setState({ ChatButtonState: '0' });
      } else {
        show.setState({ ChatButtonState: '1' });
      }

      let fullname = e.extra.fullName;
      let data = e.data;
      addResponseMessage(`${fullname} : ${data}`);
    };
  };

  handleNewUserMessage = (newMessage) => {
    let { connection } = this.props;

    connection.send(newMessage);
  };

  handleChatState = async () => {
    var { IsChatBoxOpened } = this.state;

    if (IsChatBoxOpened) {
      this.setState({ IsChatBoxOpened: false });
    } else {
      this.setState({ IsChatBoxOpened: true });
    }
  };

  FullScreenAction = () => {
    // Exemple For Get Connection //
    var { connection } = this.props;
    var elem = document.getElementById('videos-container');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  stopMediaTracks(stream) {
    var { connection } = this.props;
    stream.getTracks().forEach((track) => {
      track.stop();
    });

    connection.renegotiate();
  }

  SwitchCamera = async () => {
    var { connection } = this.props;
    var {
      devicesVideo,
      devicesVideoSelected,
      currentStreamCamera,
    } = this.props;
    var { connection } = this.props;

    var status;

    if (
      connection.DetectRTC.hasWebcam &&
      connection.DetectRTC.isWebsiteHasWebcamPermissions &&
      connection.DetectRTC
    ) {
      this.stopMediaTracks(currentStreamCamera);
      //connection.renegotiate();

      if (devicesVideoSelected) {
        status = 'environment';
        this.setState({ devicesVideoSelected: false });
      } else {
        status = 'user';
        this.setState({ devicesVideoSelected: true });
      }

      let constraintsVideo = {
        width: 1280,
        height: 720,
        frameRate: 10, //mobile
        facingMode: status,
        //mobile
      };

      const constraints = {
        video: constraintsVideo,
        audio: true,
      };

      connection.mediaConstraints = constraints;
      connection.addStream({ video: true, audio: true });

      // navigator.mediaDevices
      //   .getUserMedia(constraints)
      //   .then((stream) => {
      //     self.setState({ currentStreamCamera: stream });

      //connection.addStream(stream);

      //     connection.resetTrack(null, true);
      //   })

      //   .catch((error) => {
      //     alert(error);
      //     console.error(error);
      //   });
    }
  };

  getStreamScreenShare = async () => {
    let captureStream = null;

    try {
      captureStream = await navigator.mediaDevices.getDisplayMedia();
    } catch (err) {
      console.error('Error: ' + err);
    }
    return captureStream;
  };

  ScreenSharingTest = async () => {
    var { connection } = this.props;
    if (!connection.DetectRTC.isMobileDevice) {
      var { CurrentUser, UserRole, FullName } = this.props;

      let streamScreenShare = await this.getStreamScreenShare();
      if (streamScreenShare) {
        streamScreenShare.streamid = streamScreenShare.id;
        streamScreenShare.isScreen = true;
        this.stopMediaTracks(this.props.stream);

        var self = this;
        self.setState({ screenShareIt: true });

        var streamMixer;
        if (
          connection.DetectRTC.hasWebcam &&
          connection.DetectRTC
            .isWebsiteHasWebcamPermissions &&
          connection.DetectRTC
            .isWebsiteHasMicrophonePermissions &&
          connection.DetectRTC.hasMicrophone
        ) {
          let streamCamera = await this.props.getStreamCamera();

          streamMixer = this.props.mixStream(
            streamScreenShare,
            streamCamera,
          );

          streamScreenShare.addEventListener(
            'inactive',
            () => {
              this.stopMediaTracks(streamMixer);

              var ButtonCuteVoice = document.getElementById(
                'ButtonCuteVoice',
              );
              ButtonCuteVoice.style.background =
                'rgba(255, 255, 255, 0.5)';

              let constraintsVideo = {
                width: {
                  ideal: 1280,
                },
                height: {
                  ideal: 720,
                },
                frameRate: 30,
              };

              const constraints = {
                video: constraintsVideo,
                audio: true,
              };

              connection.mediaConstraints = constraints;
              connection.addStream({
                video: true,
                audio: true,
                oneway: true,
              });
              connection.replaceTrack({
                video: true,
                audio: true,
              });
            },
          );
        } else if (
          (!connection.DetectRTC.hasWebcam ||
            !connection.DetectRTC
              .isWebsiteHasWebcamPermissions) &&
          connection.DetectRTC
            .isWebsiteHasMicrophonePermissions &&
          connection.DetectRTC.hasMicrophone
        ) {
          let streamCamera = await this.props.getStreamCamera(
            {
              audio: true,
              video: false,
            },
          );

          streamMixer = this.props.mixStream(
            streamScreenShare,
            streamCamera,
          );

          streamScreenShare.addEventListener(
            'inactive',
            async () => {
              //this.stopMediaTracks(streamMixer);

              var ButtonCuteVoice = document.getElementById(
                'ButtonCuteVoice',
              );
              ButtonCuteVoice.style.background =
                'rgba(255, 255, 255, 0.5)';
              let streamCanvas = await this.props
                .getStreamcanvas;
              let streamCamera = await this.props.getStreamCamera(
                {
                  audio: true,
                  video: false,
                },
              );
              let finalStream = await this.props.mixStream(
                streamCanvas,
                streamCamera,
              );

              connection.addStream(finalStream);
              connection.replaceTrack(finalStream);
              this.props.updateCurrentStream(finalStream);
            },
          );
        } else if (
          connection.DetectRTC.hasWebcam &&
          connection.DetectRTC
            .isWebsiteHasWebcamPermissions &&
          (!connection.DetectRTC
            .isWebsiteHasMicrophonePermissions ||
            !connection.DetectRTC.hasMicrophone)
        ) {
          let streamCamera = await this.props.getStreamCamera(
            {
              audio: false,
              video: true,
            },
          );

          streamMixer = this.props.mixStream(
            streamScreenShare,
            streamCamera,
          );

          streamScreenShare.addEventListener(
            'inactive',
            async () => {
              this.stopMediaTracks(streamMixer);

              var ButtonCuteVoice = document.getElementById(
                'ButtonCuteVoice',
              );
              ButtonCuteVoice.style.background =
                'rgba(255, 255, 255, 0.5)';

              let streamCamera = await this.props.getStreamCamera(
                {
                  audio: false,
                  video: true,
                },
              );

              connection.addStream(streamCamera);
              connection.replaceTrack(streamCamera);
              this.props.updateCurrentStream(streamCamera);
            },
          );
        } else {
          streamMixer = streamScreenShare;
          streamScreenShare.addEventListener(
            'inactive',
            async () => {
              var ButtonCuteVoice = document.getElementById(
                'ButtonCuteVoice',
              );
              ButtonCuteVoice.style.background =
                'rgba(255, 255, 255, 0.5)';
              let streamCanvas = this.props.getStreamcanvas;

              connection.addStream(streamCanvas);
              connection.replaceTrack(streamCanvas);
              this.props.updateCurrentStream(streamCanvas);
            },
          );
        }
        connection.sdpConstraints.mandatory = {
          OfferToReceiveAudio: true,
          OfferToReceiveVideo: true,
        };

        connection.mediaConstraints = {
          video: true,
          audio: true,
          oneway: true,
        };

        this.props.updateCurrentStream(streamMixer);

        connection.addStream(streamMixer);
        connection.replaceTrack(streamMixer);
      }
    }
  };

  ScreenSharingTest1 = async () => {
    var { connection } = this.props;
    if (!connection.DetectRTC.isMobileDevice) {
      var {
        devicesVideo,
        devicesVideoSelected,
        currentStreamCamera,
      } = this.state;
      var { user_id } = this.props;
      connection.removeStream('screen');
      connection.removeStream('video');

      // let stream = await this.startCapture();
      //if (stream)
      var self = this;
      connection.addStream({
        screen: true,
        oneway: true,
        streamCallback: function (stream) {
          self.stopMediaTracks(currentStreamCamera);
          stream.addEventListener('inactive', () => {
            self.setState({ screenShareIt: false });

            var ButtonCuteVoice = document.getElementById(
              'ButtonCuteVoice',
            );
            ButtonCuteVoice.style.background =
              'rgba(255, 255, 255, 0.5)';

            let constraintsVideo = {
              width: {
                ideal: 1280,
              },
              height: {
                ideal: 720,
              },
              frameRate: 30,
            };

            const constraints = {
              video: constraintsVideo,
              audio: true,
            };

            connection.mediaConstraints = constraints;
            connection.addStream({
              video: true,
              audio: true,
            });
          });
        },
      });
    }
  };

  startRecord = () => {
    var event = this.state.currentStream;
    var connection = this.state.connection;
    var recorder = connection.recorder;
    if (!recorder) {
      recorder = RecordRTC([event.stream], {
        type: 'video',
      });
      recorder.startRecording({
        enableScreen: true,
        enableMicrophone: true,
        enableSpeakers: true,
      });
      connection.recorder = recorder;
      this.setState({
        connection: connection,
        startRecord: true,
      });
    } else {
      recorder
        .getInternalRecorder()
        .addStreams([event.stream]);
    }
  };

  stopRecord = () => {
    var event = this.state.currentStream;
    var connection = this.state.connection;

    connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true,
    };

    connection.mediaConstraints = {
      video: true,
      audio: true,
    };

    var recorder = connection.recorder;
    var self = this;
    if (!recorder) return alert('No recorder found.');
    recorder.stopRecording(function () {
      var blob = recorder.getBlob();
      RecordRTC.invokeSaveAsDialog(blob);
      connection.recorder = null;
      self.setState({
        startRecord: false,
        connection: connection,
      });
    });
  };

  recordStatus = () => {
    var flag = this.state.startRecord;
    if (!flag) {
      this.startRecord();
    } else {
      this.stopRecord();
    }
  };

  setModal1Visible(visible) {
    this.setState({ modal1Visible: visible });
  }

  handleCancel = () => {
    this.setState({ modal1Visible: false });
  };

  muteUser = (type) => {
    var { connection } = this.props;
    if (connection.attachStreams) {
      try {
        connection.attachStreams[
          connection.attachStreams.length - 1
        ].mute(type);
      } catch (e) {}
    }
  };

  unmutUser(type) {
    var { connection } = this.props;
    if (connection.attachStreams) {
      try {
        connection.attachStreams[
          connection.attachStreams.length - 1
        ].unmute(type);
      } catch (e) {}
    }
  }

  cuteVoice = () => {
    var { user_id } = this.props;

    if (this.state.muteVoice) {
      this.unmutUser('audio');
      this.setState({
        muteVoice: false,
        ButtonCuteVoice: 'rgba(255, 255, 255, 0.5)',
      });
    } else {
      this.muteUser('audio');
      this.setState({
        muteVoice: true,
        ButtonCuteVoice: 'red',
      });
    }
  };

  muteVIdeo = () => {
    var { user_id } = this.props;
    if (this.state.muteVideo) {
      this.unmutUser('video');
      this.setState({
        muteVideo: false,
        ButtonMuteVideo: 'rgba(255, 255, 255, 0.5)',
      });
    } else {
      this.muteUser('video');
      this.setState({
        muteVideo: true,
        ButtonMuteVideo: 'red',
      });
    }
  };

  Disconnect = () => {
    var { connection, UserRole, CurrentUser } = this.props;

    if (UserRole == Roles.values.teacher) {
      connection.socket.emit(
        'closeRoom',
        connection.userid,
      );
    }

    connection.getAllParticipants().forEach(function (pid) {
      connection.disconnectWith(pid);
    });

    // stop all local cameras
    connection.attachStreams.forEach(function (
      localStream,
    ) {
      localStream.stop();
    });

    getHistory().push('/');
    connection.closeSocket();

    // close socket.io connection
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-2"></div>
        <div
          className="col-md-8"
          style={{
            textAlign: 'center',
            width: '100%',
          }}
        >
          <button
            onClick={this.Disconnect}
            style={{
              backgroundColor: 'Transparent',
              border: 'none',
              cursor: 'pointer',
              overflow: 'hidden',
              outline: 'none',
              background: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <FontAwesomeIcon
              icon={faPhoneSlash}
              className="btn1"
              style={{ fontSize: '20px' }}
              color="red"
            />
          </button>
          <button
            id="ButtonCuteVoice"
            onClick={this.cuteVoice}
            style={{
              backgroundColor: 'Transparent',
              border: 'none',
              cursor: 'pointer',
              overflow: 'hidden',
              outline: 'none',
              background: this.state.ButtonCuteVoice,
            }}
          >
            <FontAwesomeIcon
              icon={faMicrophoneAltSlash}
              className="btn1"
              style={{ fontSize: '20px' }}
            />
          </button>
          <button
            onClick={this.ScreenSharingTest}
            style={{
              backgroundColor: 'Transparent',
              border: 'none',
              cursor: 'pointer',
              overflow: 'hidden',
              outline: 'none',
              background: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <FontAwesomeIcon
              icon={faShareSquare}
              className="btn1"
              style={{ fontSize: '20px' }}
            />
          </button>
          <button
            id="ButtonMuteVideo"
            onClick={this.muteVIdeo}
            style={{
              backgroundColor: 'Transparent',
              border: 'none',
              cursor: 'pointer',
              overflow: 'hidden',
              outline: 'none',
              background: this.state.ButtonMuteVideo,
            }}
          >
            <FontAwesomeIcon
              icon={faVideo}
              className="btn1"
              style={{ fontSize: '20px' }}
            />
          </button>
          <button
            onClick={this.SwitchCamera}
            style={{
              backgroundColor: 'Transparent',
              border: 'none',
              cursor: 'pointer',
              overflow: 'hidden',
              outline: 'none',
              background: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <FontAwesomeIcon
              icon={faRedoAlt}
              className="btn1"
              style={{ fontSize: '20px' }}
            />
          </button>
          <button
            onClick={this.FullScreenAction}
            style={{
              backgroundColor: 'Transparent',
              border: 'none',
              cursor: 'pointer',
              overflow: 'hidden',
              outline: 'none',
              background: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <FontAwesomeIcon
              icon={faExpand}
              className="btn1"
              style={{
                fontSize: '20px',
                color: '#00ACD3',
              }}
            />
          </button>
        </div>
        <div className="col-md-2">
          <div
            style={{
              position: 'absolute',
              top: 0,
            }}
            onClick={this.handleChatState}
          >
            {/* To Modify */}
            <Chat
              handleNewUserMessage={
                this.handleNewUserMessage
              }
              // profileAvatar={logo}
              title={i18n('liveButtons.chat.title')}
              subtitle=""
              badge={this.state.ChatButtonState}
            />
          </div>
        </div>
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

export default connect(select)(LiveButtons);
