import React from 'react';
import AppBar from 'material-ui/AppBar';

import SongsList from './modules/SongsList';
import './App.css';

export default () => (
  <div className="App">
    <AppBar title="Music Player" />
    <div className="songs-list-container">
      <SongsList />
    </div>
  </div>
);
