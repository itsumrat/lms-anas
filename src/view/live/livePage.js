import React, { Component } from 'react';
import { FullscreenOutlined } from '@ant-design/icons';
import { getHistory } from 'modules/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button } from 'antd';
import selectors from 'modules/roomSession/live/roomSessionLiveSelectors';
import selectorsAuth from 'modules/auth/authSelectors';
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
import {
  Chat,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage,
} from 'react-chat-popup';

import {
  RTCMultiConnection,
  DetectRTC,
} from 'rtcmulticonnection';
import { Row, Col, Card, Avatar } from 'antd';
import Header from 'view/layout/Header';
import { connect } from 'react-redux';
import RoomSessionService from 'modules/roomSession/RoomSessionService';
import RecordRTC from 'recordrtc';
import './livePage.css';
import MultiStreamsMixer from 'multistreamsmixer';
import config from 'config';
import CanvasDesigne from './canvasDesigne';
import Roles from 'security/roles';

var connection = '';

var roomId = 'test';
class LiveStream extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      modal1Visible: false,
    };
  }

  componentWillMount = async () => {
    connection = new RTCMultiConnection();

    // by default, socket.io server is assumed to be deployed on your own URL
    connection.socketURL = config.rtcServer;
    // 'http://localhost:9001/';
    // connection.socketURL = 'https://www.ecoletaiba.com:9001/';
    //connection.socketURL = 'http://167.172.228.9:9001/';
    // connection.socketURL = 'https://www.ecoletaiba.com:9001/';

    connection.socketMessageEvent = 'video-conference-demo';
    var { CurrentUser, UserRole, FullName } = this.props;
    connection.session = {
      audio: true,
      video: true,
      screen: false,
      oneway: false,
      data: true,
    };

    await this.init();
    var self = this;
    let devices = new Array();
    connection.DetectRTC.load(function () {
      // you can access all cameras using "DetectRTC.videoInputDevices"
      connection.DetectRTC.videoInputDevices.forEach(
        function (device) {
          if (device.kind == 'videoinput') {
            devices.push(device);
          }
        },
      );
      self.setState({ devicesVideo: devices });
    });

    connection.onmessage = function (e) {
      let fullname = e.extra.fullName;
      let data = e.data;
      addResponseMessage(`${fullname} : ${data}`);
    };
  };

  stopMediaTracks(stream) {
    stream.getTracks().forEach((track) => {
      track.stop();
    });

    connection.renegotiate();
  }
  SwitchCamera = async () => {
    var {
      devicesVideo,
      devicesVideoSelected,
      currentStreamCamera,
    } = this.state;

    var { CurrentUser, UserRole, FullName } = this.props;

    var status;
    if (devicesVideo.length > 1) {
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

  handleNewUserMessage = (newMessage) => {
    connection.send(newMessage);
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

  getStreamCamera = async () => {
    let captureStream = null;

    try {
      captureStream = await navigator.mediaDevices.getUserMedia(
        { audio: true, video: true },
      );
    } catch (err) {
      console.error('Error: ' + err);
    }
    return captureStream;
  };
  ScreenSharingTest = async () => {
    if (
      !connection.DetectRTC.isMobileDevice &&
      !this.state.screenShareIt
    ) {
      var {
        devicesVideo,
        devicesVideoSelected,
        currentStream,
      } = this.state;

      var { CurrentUser, UserRole, FullName } = this.props;

      let streamScreenShare = await this.getStreamScreenShare();
      if (streamScreenShare) {
        let localStream = connection.streamEvents.selectAll(
          {
            local: true,
            isVideo: true,
          },
        )[0].stream;

        streamScreenShare.streamid = streamScreenShare.id;
        streamScreenShare.isScreen = true;
        //  this.stopMediaTracks(currentStream);

        var self = this;
        self.setState({ screenShareIt: true });

        streamScreenShare.addEventListener(
          'inactive',
          () => {
            var { currentStream } = this.state;
            // currentStream.releaseStreams();

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
          },
        );

        let streamCamera = localStream; //await this.getStreamCamera();

        streamScreenShare.fullcanvas = true;
        streamScreenShare.width = 3840;
        streamScreenShare.height = 2160;

        streamCamera.width = parseInt(
          (20 / 100) * streamScreenShare.width,
        );
        streamCamera.height = parseInt(
          (20 / 100) * streamScreenShare.height,
        );
        streamCamera.top =
          streamScreenShare.height - streamCamera.height;
        streamCamera.left =
          streamScreenShare.width - streamCamera.width;

        const mixer = new MultiStreamsMixer([
          streamScreenShare,
          streamCamera,
        ]);

        mixer.frameInterval = 1;
        mixer.startDrawingFrames();
        let streamMixer = mixer.getMixedStream();

        connection.sdpConstraints.mandatory = {
          OfferToReceiveAudio: true,
          OfferToReceiveVideo: true,
        };

        connection.mediaConstraints = {
          video: true,
          audio: true,
          oneway: true,
        };
        self.setState({
          currentStream: streamMixer,
        });

        
        let video = document.getElementById(
          CurrentUser.user_id,
        );
        video.srcObject = streamMixer;
        connection.addStream(streamMixer);
        connection.replaceTrack(streamMixer);
      }
    }
  };

  ScreenSharingTest1 = async () => {
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

  init = async () => {
    var { CurrentUser, UserRole, FullName } = this.props;

    var self = this;
    // comment-out below line if you do not have your own socket.io server
    // connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

    connection.userid = CurrentUser.user_id;

    connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true,
    };
    connection.extra = {
      fullName: FullName,
      role: UserRole,
    };

    // STAR_FIX_VIDEO_AUTO_PAUSE_ISSUES
    // via: https://github.com/muaz-khan/RTCMultiConnection/issues/778#issuecomment-524853468
    var bitrates = 512;
    var resolutions = 'Ultra-HD';
    var videoConstraints = {};

    if (resolutions == 'HD') {
      videoConstraints = {
        width: {
          ideal: 1280,
        },
        height: {
          ideal: 720,
        },
        frameRate: 30,
      };
    }

    if (resolutions == 'Ultra-HD') {
      videoConstraints = {
        width: {
          ideal: 1920,
        },
        height: {
          ideal: 1080,
        },
        frameRate: 30,
      };
    }

    connection.mediaConstraints = {
      video: videoConstraints,
      audio: true,
    };

    var CodecsHandler = connection.CodecsHandler;

    connection.processSdp = function (sdp) {
      var codecs = 'vp8';

      if (codecs.length) {
        sdp = CodecsHandler.preferCodec(
          sdp,
          codecs.toLowerCase(),
        );
      }

      if (resolutions == 'HD') {
        sdp = CodecsHandler.setApplicationSpecificBandwidth(
          sdp,
          {
            audio: 128,
            video: bitrates,
            screen: bitrates,
          },
        );

        sdp = CodecsHandler.setVideoBitrates(sdp, {
          min: bitrates * 8 * 1024,
          max: bitrates * 8 * 1024,
        });
      }

      if (resolutions == 'Ultra-HD') {
        sdp = CodecsHandler.setApplicationSpecificBandwidth(
          sdp,
          {
            audio: 128,
            video: bitrates,
            screen: bitrates,
          },
        );

        sdp = CodecsHandler.setVideoBitrates(sdp, {
          min: bitrates * 8 * 1024,
          max: bitrates * 8 * 1024,
        });
      }

      return sdp;
    };
    // END_FIX_VIDEO_AUTO_PAUSE_ISSUES

    // https://www.rtcmulticonnection.org/docs/iceServers/
    // use your own TURN-server here!
    connection.iceServers = [
      {
        urls: [
          'stun:stun.l.google.com:19302',
          'stun:stun1.l.google.com:19302',
          'stun:stun2.l.google.com:19302',
          'stun:stun.l.google.com:19302?transport=udp',
        ],
      },
    ];

    connection.onNewParticipant = function (
      participantId,
      userPreferences,
    ) {
      // if OfferToReceiveAudio/OfferToReceiveVideo should be enabled for specific users
      
      
      

      userPreferences.localPeerSdpConstraints.OfferToReceiveAudio = true;
      userPreferences.localPeerSdpConstraints.OfferToReceiveVideo = true;

      userPreferences.dontAttachStream = false; // according to situation
      userPreferences.dontGetRemoteStream = false; // according to situation

      // below line must be included. Above all lines are optional.
      // if below line is NOT included; "join-request" will be considered rejected.
      connection.acceptParticipationRequest(
        participantId,
        userPreferences,
      );
    };

    connection.onstream = async (event) => {
      
        'Neeeeeeeeeeeeeeeeew Streaaaaaaaaaaaaaaaaaaaaaaaaam',
      );
      
      try {
        let data = await RoomSessionService.getUsername(
          event.userid,
        );
        if (event.userid == CurrentUser.user_id) {
          this.setState({
            currentStream: event.stream,
          });
        }

        if (UserRole == Roles.values.administrator) {
          this.muteUser('video');
          this.muteUser('audio');
        }

        if (
          UserRole == Roles.values.student &&
          event.userid == CurrentUser.user_id &&
          this.state.firstCnx
        ) {
          this.muteUser('video');
          this.setState({ firstCnx: false });
          this.setState({ muteVideo: true });

          var ButtonMuteVideo = document.getElementById(
            'ButtonMuteVideo',
          );
          ButtonMuteVideo.style.background = 'red';
        }

        
          '***************** This Is Event *******************',
        );

        
        if (data.role == Roles.values.teacher) {
          connection.videosContainer = document.getElementById(
            'videos-container',
          );
        } else if (
          data.role == Roles.values.student ||
          data.role == Roles.values.responsible
        ) {
          connection.videosContainer = document.getElementById(
            'videos-container-student',
          );
        }

        var existing = document.getElementById(
          event.userid,
        );

        if (existing && existing.parentNode) {
          existing.parentNode.removeChild(existing);
        }

        event.mediaElement.removeAttribute('src');
        event.mediaElement.removeAttribute('srcObject');
        event.mediaElement.muted = true;
        event.mediaElement.volume = 0;

        var video = document.createElement('video');
        video.style.width = '100%';
        // video.width = 200;
        // video.height = 200;
        try {
          video.setAttributeNode(
            document.createAttribute('autoplay'),
          );
          video.setAttributeNode(
            document.createAttribute('playsinline'),
          );
        } catch (e) {
          video.setAttribute('autoplay', true);
          video.setAttribute('playsinline', true);
        }

        if (event.type === 'local') {
          video.volume = 0;
          try {
            video.setAttributeNode(
              document.createAttribute('muted'),
            );
          } catch (e) {
            video.setAttribute('muted', true);
          }
        }
        video.srcObject = event.stream;

        if (data.role == Roles.values.teacher) {
          var mediaElement = video;
          this.state.profdatafirstname =
            data.register_data.firstName;
          this.state.profdatalastname =
            data.register_data.lastName;

          mediaElement.id = event.userid;
          setTimeout(function () {
            mediaElement.play();
          }, 5000);

          connection.videosContainer.appendChild(
            mediaElement,
          );
        } else if (
          data.role == Roles.values.student ||
          data.role == Roles.values.responsible
        ) {
          //   Hna ====================================================================

          video.style.maxHeight = '113px';
          video.setAttribute('controls', 'controls');
          var mediaElementStudents = video;

          var icon5 = document.createElement('i');
          icon5.classList.add('fa');
          icon5.classList.add('fa-ellipsis-v');

          var button5 = document.createElement('BUTTON');
          button5.onclick = this.RoomSlash;
          button5.style.backgroundColor = 'Transparent';
          button5.style.backgroundRepeat = 'no-repeat';
          button5.style.border = 'none';
          button5.style.cursor = 'pointer';
          button5.style.overflow = 'hidden';
          button5.style.outline = 'none';
          button5.style.fontSize = '12px';
          button5.appendChild(icon5);

          var Divbuttons = document.createElement('div');
          Divbuttons.style.position = 'absolute';
          Divbuttons.style.top = '1px';
          Divbuttons.style.right = '1px';
          Divbuttons.style.background =
            'rgba(255, 255, 255, 0.5)';

          Divbuttons.appendChild(button5);

          var DivCardTBody = document.createElement('div');
          DivCardTBody.style.position = 'relative';
          DivCardTBody.style.textAlign = 'center';
          DivCardTBody.appendChild(mediaElementStudents);
          DivCardTBody.appendChild(Divbuttons);

          var DivCardName = document.createElement('div');
          DivCardName.style.background =
            'rgba(255, 255, 255, 0.5)';
          var bold = document.createElement('strong');
          var textnode = document.createTextNode(
            data.register_data.firstName +
            ' ' +
            data.register_data.lastName,
          );
          bold.appendChild(textnode);
          DivCardName.appendChild(bold);

          var DivCard = document.createElement('div');
          DivCard.classList.add('columniii');
          DivCard.classList.add('border-primary');
          DivCard.setAttribute('id', event.userid);
          DivCard.appendChild(DivCardTBody);
          DivCard.appendChild(DivCardName);

          connection.videosContainer.appendChild(DivCard);
          setTimeout(function () {
            mediaElementStudents.play();
          }, 5000);
          
            'Eureeeeeeeeeeeeeeeeeeeeeeeeur',
            event.userid,
          );
          mediaElementStudents.id = event.user_id;
        }
        // Sali Hna ===============================================================

        // to keep room-id in cache
        localStorage.setItem(
          connection.socketMessageEvent,
          connection.sessionid,
        );

        if (event.type === 'local') {
          connection.socket.on('disconnect', function () {
            if (!connection.getAllParticipants().length) {
              window.location.reload();
            }
          });
        }
      } catch (error) { }
    };

    connection.onNewParticipant = function (
      participantId,
      userPreferences,
    ) {
      // if OfferToReceiveAudio/OfferToReceiveVideo should be enabled for specific users
      userPreferences.localPeerSdpConstraints.OfferToReceiveAudio = true;
      userPreferences.localPeerSdpConstraints.OfferToReceiveVideo = true;
      userPreferences.dontAttachStream = false; // according to situation
      userPreferences.dontGetRemoteStream = false; // according to situation 	// below line must be included. Above all lines are optional. 	// if below line is NOT included; "join-request" will be considered rejected.
      connection.acceptParticipationRequest(
        participantId,
        userPreferences,
      );
    };

    connection.onstreamended = function (event) {
      var mediaElement = document.getElementById(
        event.userid,
      );

      if (mediaElement) {
        mediaElement.parentNode.removeChild(mediaElement);
      }
    };

    connection.onMediaError = function (e) {
      if (e.message === 'Concurrent mic process limit.') {
        if (DetectRTC.audioInputDevices.length <= 1) {
          alert(
            'Please select external microphone. Check github issue number 483.',
          );
          return;
        }
        var secondaryMic =
          DetectRTC.audioInputDevices[1].deviceId;
        connection.mediaConstraints.audio = {
          deviceId: secondaryMic,
        };

        connection.join(connection.sessionid);
      }
    };

    // if local or remote stream is muted
    connection.onmute = function (e) {
      return;
    };

    // if local or remote stream is unmuted
    connection.onunmute = function (e) {
      return;
    };

    connection.onopen = function (event) {
      
    };

    // ..................................
    // ALL below scripts are redundant!!!
    // ..................................

    // ......................................................
    // ......................Handling Room-ID................
    // ......................................................

    function showRoomURL(roomid) {
      var roomHashURL = '#' + roomid;
      var roomQueryStringURL = '?roomid=' + roomid;
    }

    (function () {
      var params = {},
        r = /([^&=]+)=?([^&]*)/g;

      function d(s) {
        return decodeURIComponent(s.replace(/\+/g, ' '));
      }
      var match,
        search = window.location.search;
      while ((match = r.exec(search.substring(1))))
        params[d(match[1])] = d(match[2]);
      window.params = params;
    })();

    var roomid = roomId;
    if (
      localStorage.getItem(connection.socketMessageEvent)
    ) {
      roomid = localStorage.getItem(
        connection.socketMessageEvent,
      );
    } else {
      roomid = connection.token();
    }

    var hashString = window.location.hash.replace('#', '');
    if (
      hashString.length &&
      hashString.indexOf('comment-') == 0
    ) {
      hashString = '';
    }

    // detect 2G
    if (
      navigator.connection &&
      navigator.connection.type === 'cellular' &&
      navigator.connection.downlinkMax <= 0.115
    ) {
      alert(
        '2G is not supported. Please use a better internet service.',
      );
    }
    if (UserRole == Roles.values.teacher) {
      connection.openOrJoin(roomId, function (
        isRoomExist,
        roomid,
        error,
      ) {
        connection.setCustomSocketEvent('closeRoom');
        connection.setCustomSocketEvent('dashboardDrawing');

        if (error) {
          alert(error);
        } else if (connection.isInitiator === true) {
          // if room doesn't exist, it means that current user will create the room
          
          showRoomURL(roomid);
        }
      });
    } else {
      connection.join(roomId, function (
        isRoomExist,
        roomid,
        error,
      ) {
        connection.socket.on('closeRoom', function (
          message,
        ) {
          self.Disconnect();
        });
        if (error) {
          alert(' classe Fermée !! ');
          getHistory().push('/');
        } else if (connection.isInitiator === true) {
          // if room doesn't exist, it means that current user will create the room

          showRoomURL(roomid);
        }
      });
    }
  };
  RoomSlash = () => {
    
  };

  ChatBoxOpen = () => {
    
  };

  FullScreenAction = () => {
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

  ShareScreenAction = () => {
    // this.init();
  };

  muteUser = (type) => {
    if (connection.attachStreams) {
      connection.attachStreams[0].mute(type);
    }
  };
  unmutUser(type) {
    if (connection.attachStreams) {
      connection.attachStreams[0].unmute(type);
    }
  }
  cuteVoice = () => {
    var { user_id } = this.props;
    var ButtonCuteVoice = document.getElementById(
      'ButtonCuteVoice',
    );
    
    if (this.state.muteVoice) {
      this.unmutUser('audio');
      this.setState({ muteVoice: false });
      ButtonCuteVoice.style.background =
        'rgba(255, 255, 255, 0.5)';
    } else {
      this.muteUser('audio');
      this.setState({ muteVoice: true });
      ButtonCuteVoice.style.background = 'red';
    }
  };

  muteVIdeo = () => {
    var { user_id } = this.props;
    var ButtonMuteVideo = document.getElementById(
      'ButtonMuteVideo',
    );
    if (this.state.muteVideo) {
      this.unmutUser('video');
      this.setState({ muteVideo: false });
      ButtonMuteVideo.style.background =
        'rgba(255, 255, 255, 0.5)';
    } else {
      this.muteUser('video');
      this.setState({ muteVideo: true });
      ButtonMuteVideo.style.background = 'red';
    }
  };

  Disconnect = () => {
    var { UserRole, CurrentUser } = this.props;

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
    const twoColumnsResponsiveProps = {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 12,
      style: { marginBottom: 24 },
    };

    const threeColumnsResponsiveProps = {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 8,
      style: { marginBottom: 24 },
    };

    var { CurrentUser, UserRole, FullName } = this.props;

    return (
      <React.Fragment>
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
          {/* Prof */}
          <div
            id="videos-container"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
            }}
          >
            {/* <img
              className="img-fluid"
              src="/images/NoVideo.png"
            /> */}
          </div>
          <div
            id="nomprof"
            style={{
              background: 'rgba(255, 255, 255, 0.5)',
              position: 'absolute',
              top: 0,
              width: '100%',
              textAlign: 'center',
            }}
          >
            <b style={{ color: 'black' }}>
              {' '}
              {this.state.profdatafirstname +
                ' ' +
                this.state.profdatalastname}{' '}
            </b>
          </div>
        </div>
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
          <CanvasDesigne connection={connection} />
        </Modal>

        <div
          style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
          }}
        >
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
                  background: 'rgba(255, 255, 255, 0.5)',
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
                  background: 'rgba(255, 255, 255, 0.5)',
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
              >
                <Chat
                  handleNewUserMessage={
                    this.handleNewUserMessage
                  }
                  // profileAvatar={logo}
                  title="Chat du Groupe"
                  subtitle=""
                />
              </div>
            </div>
          </div>
          <br />
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Etudiant */}
            <div
              id="videos-container-student"
              className="riwww"
            ></div>
          </div>
        </div>
      </React.Fragment>
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

export default connect(select)(LiveStream);

