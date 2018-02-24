import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

class SongContainer extends Component {
  static propTypes = {
    songId: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const url = `${process.env.REACT_APP_API_HOST}/song/${props.songId}.mp3`;
    const audio = new Audio();
    // setting preload to none as we don't want to pre-download all the songs on the page
    audio.preload = 'none';
    audio.src = url;
    // eslint-disable-next-line react/no-unused-state
    this.state = { isPlaying: false, audio };
  }

  onPlayPauseClick = () => {
    this.setState(prevState => {
      const { isPlaying, audio } = prevState;
      if (isPlaying) audio.pause();
      else audio.play();
      return { isPlaying: !isPlaying };
    });
  };

  render() {
    const { songId } = this.props;
    const { isPlaying } = this.state;
    return <Song title={songId} onClick={this.onPlayPauseClick} isPlaying={isPlaying} />;
  }
}

export default SongContainer;
