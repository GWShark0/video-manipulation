import React from 'react';
import { ReactComponent as PlayIcon } from '../assets/play.svg';
import { ReactComponent as PauseIcon } from '../assets/pause.svg';

import './VideoControls.scss';

function VideoControls(props) {
  const {
    isPaused,
    isPlaying,
    onPause,
    onPlay,
  } = props;

  return (
    <div className="video-controls">
      {isPaused && (
        <PlayIcon
          className="video-controls__icon"
          onClick={onPlay}
        />
      )}
      {isPlaying && (
        <PauseIcon
          className="video-controls__icon"
          onClick={onPause}
        />
      )}
    </div>
  )
}

VideoControls.defaultProps = {
  isPaused: true,
  isPlaying: false,
  onPlay: () => { },
  onPause: () => { },
}

export default VideoControls;
