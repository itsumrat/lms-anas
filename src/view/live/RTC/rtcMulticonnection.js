import {
  RTCMultiConnection,
  DetectRTC,
} from 'rtcmulticonnection';
class ControllerRtc {
  constructor(socketUrl) {
    this.connection = new RTCMultiConnection();

    // by default, socket.io server is assumed to be deployed on your own URL
    this.connection.socketURL = socketUrl;

    this.connection.socketMessageEvent =
      'video-conference-demo';

    this.connection.session = {
      audio: true,
      video: true,
      screen: false,
      oneway: false,
      data: true,
    };
    this.connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true,
    };

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

    this.connection.mediaConstraints = {
      video: videoConstraints,
      audio: true,
    };

    var CodecsHandler = this.connection.CodecsHandler;

    this.connection.processSdp = function (sdp) {
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

    // https://www.rtcmultithis.connection.org/docs/iceServers/
    // use your own TURN-server here!
    this.connection.iceServers = [
      {
        urls: [
          'stun:stun.l.google.com:19302',
          'stun:stun1.l.google.com:19302',
          'stun:stun2.l.google.com:19302',
          'stun:stun.l.google.com:19302?transport=udp',
        ],
      },
    ];
  }
}

export default ControllerRtc;
