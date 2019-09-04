import React from 'react';
import './App.scss';

import mountains from './mountains.mp4';

function App() {
  const videoRef = React.createRef();

  const handleMouseEnter = (event) => {
    videoRef.current.play();
  }

  const handleMouseLeave = (event) => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }

  return (
    <div className="app">
      <video
        className="video"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={videoRef}
      >
        <source src={mountains} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
