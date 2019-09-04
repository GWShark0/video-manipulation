import React from 'react';
import { ReactComponent as PlayIcon } from '../assets/play.svg';
import { ReactComponent as PauseIcon } from '../assets/pause.svg';

import './VideoControls.scss';

function VideoControls(props) {
  const {
    isPlaying,
    onPause,
    onPlay,
  } = props;

  return (
    <div className="video-controls">
      {!isPlaying && (
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
  isPlaying: false,
  onPlay: () => { },
  onPause: () => { },
}

export default VideoControls;
