// __________________
// getHTMLMediaElement.js

function getHTMLMediaElement(mediaElement, config) {
  config = config || {};

  if (
    !mediaElement.nodeName ||
    (mediaElement.nodeName.toLowerCase() != 'audio' &&
      mediaElement.nodeName.toLowerCase() != 'video')
  ) {
    if (!mediaElement.getVideoTracks().length) {
      return getAudioElement(mediaElement, config);
    }

    var mediaStream = mediaElement;
    mediaElement = document.createElement(
      mediaStream.getVideoTracks().length
        ? 'video'
        : 'audio',
    );

    try {
      mediaElement.setAttributeNode(
        document.createAttribute('autoplay'),
      );
      mediaElement.setAttributeNode(
        document.createAttribute('playsinline'),
      );
    } catch (e) {
      mediaElement.setAttribute('autoplay', true);
      mediaElement.setAttribute('playsinline', true);
    }

    if ('srcObject' in mediaElement) {
      mediaElement.srcObject = mediaStream;
    } else {
      mediaElement[
        !!navigator.mozGetUserMedia ? 'mozSrcObject' : 'src'
      ] = !!navigator.mozGetUserMedia
          ? mediaStream
          : (window.URL || window.webkitURL).createObjectURL(
            mediaStream,
          );
    }
  }

  if (
    mediaElement.nodeName &&
    mediaElement.nodeName.toLowerCase() == 'audio'
  ) {
    return getAudioElement(mediaElement, config);
  }

  var buttons = [
    'mute-audio',
    'mute-video',
    'full-screen',
    'volume-slider',
    'stop',
  ];
  buttons.has = function (element) {
    return buttons.indexOf(element) !== -1;
  };

  config.toggle = config.toggle || [];
  config.toggle.has = function (element) {
    return config.toggle.indexOf(element) !== -1;
  };

  var mediaElementContainer = document.createElement('div');
  mediaElementContainer.name = 'media-container';

  var mediaControls = document.createElement('div');
  mediaControls.name = 'media-controls';
  mediaElementContainer.appendChild(mediaControls);

  if (buttons.has('mute-audio')) {
    var muteAudio = document.createElement('div');
    muteAudio.name =
      'control ' +
      (config.toggle.has('mute-audio')
        ? 'unmute-audio selected'
        : 'mute-audio');
    mediaControls.appendChild(muteAudio);

    muteAudio.onclick = function () {
      if (
        muteAudio.name.indexOf('unmute-audio') != -1
      ) {
        muteAudio.name = muteAudio.name.replace(
          'unmute-audio selected',
          'mute-audio',
        );
        mediaElement.muted = false;
        mediaElement.volume = 1;
        if (config.onUnMuted) config.onUnMuted('audio');
      } else {
        muteAudio.name = muteAudio.name.replace(
          'mute-audio',
          'unmute-audio selected',
        );
        mediaElement.muted = true;
        mediaElement.volume = 0;
        if (config.onMuted) config.onMuted('audio');
      }
    };
  }

  if (buttons.has('mute-video')) {
    var muteVideo = document.createElement('div');
    muteVideo.name =
      'control ' +
      (config.toggle.has('mute-video')
        ? 'unmute-video selected'
        : 'mute-video');
    mediaControls.appendChild(muteVideo);

    muteVideo.onclick = function () {
      if (
        muteVideo.name.indexOf('unmute-video') != -1
      ) {
        muteVideo.name = muteVideo.name.replace(
          'unmute-video selected',
          'mute-video',
        );
        mediaElement.muted = false;
        mediaElement.volume = 1;
        mediaElement.play();
        if (config.onUnMuted) config.onUnMuted('video');
      } else {
        muteVideo.name = muteVideo.name.replace(
          'mute-video',
          'unmute-video selected',
        );
        mediaElement.muted = true;
        mediaElement.volume = 0;
        mediaElement.pause();
        if (config.onMuted) config.onMuted('video');
      }
    };
  }

  if (buttons.has('take-snapshot')) {
    var takeSnapshot = document.createElement('div');
    takeSnapshot.name = 'control take-snapshot';
    mediaControls.appendChild(takeSnapshot);

    takeSnapshot.onclick = function () {
      if (config.onTakeSnapshot) config.onTakeSnapshot();
    };
  }

  if (buttons.has('stop')) {
    var stop = document.createElement('div');
    stop.name = 'control stop';
    mediaControls.appendChild(stop);

    stop.onclick = function () {
      mediaElementContainer.style.opacity = 0;
      setTimeout(function () {
        if (mediaElementContainer.parentNode) {
          mediaElementContainer.parentNode.removeChild(
            mediaElementContainer,
          );
        }
      }, 800);
      if (config.onStopped) config.onStopped();
    };
  }

  var volumeControl = document.createElement('div');
  volumeControl.name = 'volume-control';

  if (buttons.has('record-audio')) {
    var recordAudio = document.createElement('div');
    recordAudio.name =
      'control ' +
      (config.toggle.has('record-audio')
        ? 'stop-recording-audio selected'
        : 'record-audio');
    volumeControl.appendChild(recordAudio);

    recordAudio.onclick = function () {
      if (
        recordAudio.name.indexOf(
          'stop-recording-audio',
        ) != -1
      ) {
        recordAudio.name = recordAudio.name.replace(
          'stop-recording-audio selected',
          'record-audio',
        );
        if (config.onRecordingStopped)
          config.onRecordingStopped('audio');
      } else {
        recordAudio.name = recordAudio.name.replace(
          'record-audio',
          'stop-recording-audio selected',
        );
        if (config.onRecordingStarted)
          config.onRecordingStarted('audio');
      }
    };
  }

  if (buttons.has('record-video')) {
    var recordVideo = document.createElement('div');
    recordVideo.name =
      'control ' +
      (config.toggle.has('record-video')
        ? 'stop-recording-video selected'
        : 'record-video');
    volumeControl.appendChild(recordVideo);

    recordVideo.onclick = function () {
      if (
        recordVideo.name.indexOf(
          'stop-recording-video',
        ) != -1
      ) {
        recordVideo.name = recordVideo.name.replace(
          'stop-recording-video selected',
          'record-video',
        );
        if (config.onRecordingStopped)
          config.onRecordingStopped('video');
      } else {
        recordVideo.name = recordVideo.name.replace(
          'record-video',
          'stop-recording-video selected',
        );
        if (config.onRecordingStarted)
          config.onRecordingStarted('video');
      }
    };
  }

  if (buttons.has('volume-slider')) {
    var volumeSlider = document.createElement('div');
    volumeSlider.name = 'control volume-slider';
    volumeControl.appendChild(volumeSlider);

    var slider = document.createElement('input');
    slider.type = 'range';
    slider.min = 0;
    slider.max = 100;
    slider.value = 100;
    slider.onchange = function () {
      mediaElement.volume =
        '.' + slider.value.toString().substr(0, 1);
    };
    volumeSlider.appendChild(slider);
  }

  if (buttons.has('full-screen')) {
    var zoom = document.createElement('div');
    zoom.name =
      'control ' +
      (config.toggle.has('zoom-in')
        ? 'zoom-out selected'
        : 'zoom-in');

    if (!slider && !recordAudio && !recordVideo && zoom) {
      mediaControls.insertBefore(
        zoom,
        mediaControls.firstChild,
      );
    } else volumeControl.appendChild(zoom);

    zoom.onclick = function () {
      if (zoom.name.indexOf('zoom-out') != -1) {
        zoom.name = zoom.name.replace(
          'zoom-out selected',
          'zoom-in',
        );
        exitFullScreen();
      } else {
        zoom.name = zoom.name.replace(
          'zoom-in',
          'zoom-out selected',
        );
        launchFullscreen(mediaElementContainer);
      }
    };

    function launchFullscreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT,
        );
      }
    }

    function exitFullScreen() {
      if (document.fullscreen) {
        document.cancelFullScreen();
      }

      if (document.mozFullScreen) {
        document.mozCancelFullScreen();
      }

      if (document.webkitIsFullScreen) {
        document.webkitCancelFullScreen();
      }
    }

    function screenStateChange(e) {
      if (e.srcElement != mediaElementContainer) return;

      var isFullScreeMode =
        document.webkitIsFullScreen ||
        document.mozFullScreen ||
        document.fullscreen;

      mediaElementContainer.style.width =
        (isFullScreeMode
          ? window.innerWidth - 20
          : config.width) + 'px';
      mediaElementContainer.style.display = isFullScreeMode
        ? 'block'
        : 'inline-block';

      if (config.height) {
        mediaBox.style.height =
          (isFullScreeMode
            ? window.innerHeight - 20
            : config.height) + 'px';
      }

      if (!isFullScreeMode && config.onZoomout)
        config.onZoomout();
      if (isFullScreeMode && config.onZoomin)
        config.onZoomin();

      if (
        !isFullScreeMode &&
        zoom.name.indexOf('zoom-out') != -1
      ) {
        zoom.name = zoom.name.replace(
          'zoom-out selected',
          'zoom-in',
        );
        if (config.onZoomout) config.onZoomout();
      }
      setTimeout(adjustControls, 1000);
    }

    document.addEventListener(
      'fullscreenchange',
      screenStateChange,
      false,
    );
    document.addEventListener(
      'mozfullscreenchange',
      screenStateChange,
      false,
    );
    document.addEventListener(
      'webkitfullscreenchange',
      screenStateChange,
      false,
    );
  }

  if (
    buttons.has('volume-slider') ||
    buttons.has('full-screen') ||
    buttons.has('record-audio') ||
    buttons.has('record-video')
  ) {
    mediaElementContainer.appendChild(volumeControl);
  }

  var mediaBox = document.createElement('div');
  mediaBox.name = 'media-box';
  mediaElementContainer.appendChild(mediaBox);

  if (config.title) {
    var h2 = document.createElement('h2');
    h2.innerHTML = config.title;
    h2.setAttribute(
      'style',
      'position: absolute;color:white;font-size:17px;text-shadow: 1px 1px black;padding:0;margin:0;text-align: left; margin-top: 10px; margin-left: 10px; display: block; border: 0;line-height:1.5;z-index:1;',
    );
    mediaBox.appendChild(h2);
  }

  mediaBox.appendChild(mediaElement);

  if (!config.width)
    config.width = window.innerWidth / 2 - 50;

  mediaElementContainer.style.width = config.width + 'px';

  if (config.height) {
    mediaBox.style.height = config.height + 'px';
  }

  mediaBox.querySelector('video').style.maxHeight =
    window.innerHeight + 'px';

  var times = 0;

  function adjustControls() {
    mediaControls.style.marginLeft =
      mediaElementContainer.clientWidth -
      mediaControls.clientWidth -
      2 +
      'px';

    if (slider) {
      slider.style.width =
        mediaElementContainer.clientWidth / 3 + 'px';
      volumeControl.style.marginLeft =
        mediaElementContainer.clientWidth / 3 - 30 + 'px';

      if (zoom)
        zoom.style['border-top-right-radius'] = '5px';
    } else {
      volumeControl.style.marginLeft =
        mediaElementContainer.clientWidth -
        volumeControl.clientWidth -
        2 +
        'px';
    }

    volumeControl.style.marginTop =
      mediaElementContainer.clientHeight -
      volumeControl.clientHeight -
      2 +
      'px';

    if (times < 10) {
      times++;
      setTimeout(adjustControls, 1000);
    } else times = 0;
  }

  if (
    config.showOnMouseEnter ||
    typeof config.showOnMouseEnter === 'undefined'
  ) {
    mediaElementContainer.onmouseenter = mediaElementContainer.onmousedown = function () {
      adjustControls();
      mediaControls.style.opacity = 1;
      volumeControl.style.opacity = 1;
    };

    mediaElementContainer.onmouseleave = function () {
      mediaControls.style.opacity = 0;
      volumeControl.style.opacity = 0;
    };
  } else {
    setTimeout(function () {
      adjustControls();
      setTimeout(function () {
        mediaControls.style.opacity = 1;
        volumeControl.style.opacity = 1;
      }, 300);
    }, 700);
  }

  adjustControls();

  mediaElementContainer.toggle = function (clasName) {
    if (typeof clasName != 'string') {
      for (var i = 0; i < clasName.length; i++) {
        mediaElementContainer.toggle(clasName[i]);
      }
      return;
    }

    if (clasName == 'mute-audio' && muteAudio)
      muteAudio.onclick();
    if (clasName == 'mute-video' && muteVideo)
      muteVideo.onclick();

    if (clasName == 'record-audio' && recordAudio)
      recordAudio.onclick();
    if (clasName == 'record-video' && recordVideo)
      recordVideo.onclick();

    if (clasName == 'stop' && stop) stop.onclick();

    return this;
  };

  mediaElementContainer.media = mediaElement;

  return mediaElementContainer;
}

// __________________
// getAudioElement.js

function getAudioElement(mediaElement, config) {
  config = config || {};

  if (
    !mediaElement.nodeName ||
    (mediaElement.nodeName.toLowerCase() != 'audio' &&
      mediaElement.nodeName.toLowerCase() != 'video')
  ) {
    var mediaStream = mediaElement;
    mediaElement = document.createElement('audio');

    try {
      mediaElement.setAttributeNode(
        document.createAttribute('autoplay'),
      );
      mediaElement.setAttributeNode(
        document.createAttribute('controls'),
      );
    } catch (e) {
      mediaElement.setAttribute('autoplay', true);
      mediaElement.setAttribute('controls', true);
    }

    if ('srcObject' in mediaElement) {
      mediaElement.mediaElement = mediaStream;
    } else {
      mediaElement[
        !!navigator.mozGetUserMedia ? 'mozSrcObject' : 'src'
      ] = !!navigator.mozGetUserMedia
          ? mediaStream
          : (window.URL || window.webkitURL).createObjectURL(
            mediaStream,
          );
    }
  }

  config.toggle = config.toggle || [];
  config.toggle.has = function (element) {
    return config.toggle.indexOf(element) !== -1;
  };

  var mediaElementContainer = document.createElement('div');
  mediaElementContainer.name = 'media-container';

  var mediaControls = document.createElement('div');
  mediaControls.name = 'media-controls';
  mediaElementContainer.appendChild(mediaControls);

  var muteAudio = document.createElement('div');
  muteAudio.name =
    'control ' +
    (config.toggle.has('mute-audio')
      ? 'unmute-audio selected'
      : 'mute-audio');
  mediaControls.appendChild(muteAudio);

  muteAudio.style['border-top-left-radius'] = '5px';

  muteAudio.onclick = function () {
    if (muteAudio.name.indexOf('unmute-audio') != -1) {
      muteAudio.name = muteAudio.name.replace(
        'unmute-audio selected',
        'mute-audio',
      );
      mediaElement.muted = false;
      if (config.onUnMuted) config.onUnMuted('audio');
    } else {
      muteAudio.name = muteAudio.name.replace(
        'mute-audio',
        'unmute-audio selected',
      );
      mediaElement.muted = true;
      if (config.onMuted) config.onMuted('audio');
    }
  };

  if (
    !config.buttons ||
    (config.buttons &&
      config.buttons.indexOf('record-audio') != -1)
  ) {
    var recordAudio = document.createElement('div');
    recordAudio.name =
      'control ' +
      (config.toggle.has('record-audio')
        ? 'stop-recording-audio selected'
        : 'record-audio');
    mediaControls.appendChild(recordAudio);

    recordAudio.onclick = function () {
      if (
        recordAudio.name.indexOf(
          'stop-recording-audio',
        ) != -1
      ) {
        recordAudio.name = recordAudio.name.replace(
          'stop-recording-audio selected',
          'record-audio',
        );
        if (config.onRecordingStopped)
          config.onRecordingStopped('audio');
      } else {
        recordAudio.name = recordAudio.name.replace(
          'record-audio',
          'stop-recording-audio selected',
        );
        if (config.onRecordingStarted)
          config.onRecordingStarted('audio');
      }
    };
  }

  var volumeSlider = document.createElement('div');
  volumeSlider.name = 'control volume-slider';
  volumeSlider.style.width = 'auto';
  mediaControls.appendChild(volumeSlider);

  var slider = document.createElement('input');
  slider.style.marginTop = '11px';
  slider.style.width = ' 200px';

  if (
    config.buttons &&
    config.buttons.indexOf('record-audio') == -1
  ) {
    slider.style.width = ' 241px';
  }

  slider.type = 'range';
  slider.min = 0;
  slider.max = 100;
  slider.value = 100;
  slider.onchange = function () {
    mediaElement.volume =
      '.' + slider.value.toString().substr(0, 1);
  };
  volumeSlider.appendChild(slider);

  var stop = document.createElement('div');
  stop.name = 'control stop';
  mediaControls.appendChild(stop);

  stop.onclick = function () {
    mediaElementContainer.style.opacity = 0;
    setTimeout(function () {
      if (mediaElementContainer.parentNode) {
        mediaElementContainer.parentNode.removeChild(
          mediaElementContainer,
        );
      }
    }, 800);
    if (config.onStopped) config.onStopped();
  };

  stop.style['border-top-right-radius'] = '5px';
  stop.style['border-bottom-right-radius'] = '5px';

  var mediaBox = document.createElement('div');
  mediaBox.name = 'media-box';
  mediaElementContainer.appendChild(mediaBox);

  var h2 = document.createElement('h2');
  h2.innerHTML = config.title || 'Audio Element';
  h2.setAttribute(
    'style',
    'position: absolute;color: rgb(160, 160, 160);font-size: 20px;text-shadow: 1px 1px rgb(255, 255, 255);padding:0;margin:0;',
  );
  mediaBox.appendChild(h2);

  mediaBox.appendChild(mediaElement);

  mediaElementContainer.style.width = '329px';
  mediaBox.style.height = '90px';

  h2.style.width = mediaElementContainer.style.width;
  h2.style.height = '50px';
  h2.style.overflow = 'hidden';

  var times = 0;

  function adjustControls() {
    mediaControls.style.marginLeft =
      mediaElementContainer.clientWidth -
      mediaControls.clientWidth -
      7 +
      'px';
    mediaControls.style.marginTop =
      mediaElementContainer.clientHeight -
      mediaControls.clientHeight -
      6 +
      'px';
    if (times < 10) {
      times++;
      setTimeout(adjustControls, 1000);
    } else times = 0;
  }

  if (
    config.showOnMouseEnter ||
    typeof config.showOnMouseEnter === 'undefined'
  ) {
    mediaElementContainer.onmouseenter = mediaElementContainer.onmousedown = function () {
      adjustControls();
      mediaControls.style.opacity = 1;
    };

    mediaElementContainer.onmouseleave = function () {
      mediaControls.style.opacity = 0;
    };
  } else {
    setTimeout(function () {
      adjustControls();
      setTimeout(function () {
        mediaControls.style.opacity = 1;
      }, 300);
    }, 700);
  }

  adjustControls();

  mediaElementContainer.toggle = function (clasName) {
    if (typeof clasName != 'string') {
      for (var i = 0; i < clasName.length; i++) {
        mediaElementContainer.toggle(clasName[i]);
      }
      return;
    }

    if (clasName == 'mute-audio' && muteAudio)
      muteAudio.onclick();
    if (clasName == 'record-audio' && recordAudio)
      recordAudio.onclick();
    if (clasName == 'stop' && stop) stop.onclick();

    return this;
  };

  mediaElementContainer.media = mediaElement;

  return mediaElementContainer;
}

export default getHTMLMediaElement;
