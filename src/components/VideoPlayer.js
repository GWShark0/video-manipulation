import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import VideoControls from './VideoControls';

function isPaused(videoState) {
  return videoState === 'PAUSED';
}

function isPlaying(videoState) {
  return videoState === 'PLAYING';
}

function VideoPlayer(props) {
  const { src } = props;
  const [videoState, setVideoState] = useState('PAUSED');
  const videoRef = React.createRef();

  const playVideo = () => {
    // videoRef.current.play();
    setVideoState('PLAYING');
  };

  const pauseVideo = () => {
    // videoRef.current.pause();
    setVideoState('PAUSED');
  };

  const togglePlayPauseVideo = () => {
    setVideoState(prevVideoState => isPlaying(prevVideoState) ? 'PAUSED' : 'PLAYING');
  }

  useHotkeys('space', togglePlayPauseVideo);

  return (
    <div>
      <video
        className="video"
        onEnded={pauseVideo}
        ref={videoRef}
      >
        <source src={src} type="video/mp4" />
      </video>
      <VideoControls
        isPaused={isPaused(videoState)}
        isPlaying={isPlaying(videoState)}
        onPause={pauseVideo}
        onPlay={playVideo}
      />
    </div>
  );
}

export default VideoPlayer;
