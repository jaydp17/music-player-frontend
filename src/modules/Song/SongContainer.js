import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

class SongContainer extends Component {
  state = { isPlaying: false };
  onPlayPauseClick = () => {
    this.setState(prevState => ({ isPlaying: !prevState.isPlaying }));
  };

  render() {
    const { isPlaying } = this.state;
    return <Song onClick={this.onPlayPauseClick} isPlaying={isPlaying} />;
  }
}

export default SongContainer;
