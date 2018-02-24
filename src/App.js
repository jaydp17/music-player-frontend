import React from 'react';
import AppBar from 'material-ui/AppBar';

import './App.css';

import SongsList from './modules/SongsList';

export default () => (
  <div className="App">
    <AppBar title="Music Player" />
    <SongsList />
  </div>
);
