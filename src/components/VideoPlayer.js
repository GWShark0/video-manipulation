import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import Video from './Video';
import VideoControls from './VideoControls';

function isPlaying(videoState) {
  return videoState === 'PLAYING';
}

function VideoPlayer(props) {
  const { src } = props;
  const [videoState, setVideoState] = useState('PAUSED');

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
      <Video
        src={src}
        isPlaying={isPlaying(videoState)}
      />
      <VideoControls
        isPlaying={isPlaying(videoState)}
        onPause={pauseVideo}
        onPlay={playVideo}
      />
    </div>
  );
}

export default VideoPlayer;
