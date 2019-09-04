import React from 'react';

import './Video.scss';

function Video(props) {
  const { src } = props;
  const videoRef = React.createRef();

  return (
    <video
      className="video"
      ref={videoRef}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default Video;
