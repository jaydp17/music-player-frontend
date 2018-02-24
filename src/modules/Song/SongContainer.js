import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Song from './Song';
import { isSongIdPlaying, getListenerCount } from './song.selector';
import { playSongId, pauseSongId } from './song.actions';

class SongContainer extends Component {
  static propTypes = {
    songId: PropTypes.string.isRequired,
    isSongIdPlaying: PropTypes.func.isRequired,
    playSongId: PropTypes.func.isRequired,
    pauseSongId: PropTypes.func.isRequired,
    getListenerCount: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const url = `${process.env.REACT_APP_API_HOST}/song/${props.songId}.mp3`;
    this.audio = new Audio();
    // setting preload to none as we don't want to pre-download all the songs on the page
    this.audio.preload = 'none';
    this.audio.src = url;
  }

  componentWillReceiveProps(nextProps) {
    const { songId } = nextProps;
    const isPlaying = nextProps.isSongIdPlaying(songId);
    if (isPlaying) this.audio.play();
    else this.audio.pause();
  }

  onPlayPauseClick = () => {
    const { songId } = this.props;
    const isPlaying = this.props.isSongIdPlaying(songId);
    if (isPlaying) this.props.pauseSongId(songId);
    else this.props.playSongId(songId);
  };

  render() {
    const { songId } = this.props;
    const isPlaying = this.props.isSongIdPlaying(songId);
    const listenerCount = this.props.getListenerCount(songId);
    return <Song title={songId} onClick={this.onPlayPauseClick} isPlaying={isPlaying} listenerCount={listenerCount} />;
  }
}

const mapStateToProps = state => ({
  isSongIdPlaying: isSongIdPlaying(state),
  getListenerCount: getListenerCount(state),
});

const mapDispatchToProps = {
  playSongId,
  pauseSongId,
};

export default connect(mapStateToProps, mapDispatchToProps)(SongContainer);
