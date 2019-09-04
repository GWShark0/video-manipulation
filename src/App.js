import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import mountains from './mountains.mp4';

import './App.scss';

function App() {
  return (
    <div className="app">
      <VideoPlayer src={mountains} />
    </div>
  );
}

export default App;
