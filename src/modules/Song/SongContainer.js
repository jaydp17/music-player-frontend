import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Song from './Song';
import { isSongIdPlaying, getListenerCount } from './song.selector';
import { playSongId, pauseSongId } from './song.actions';

class SongContainer extends Component {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      singer: PropTypes.string.isRequired,
      art: PropTypes.string.isRequired,
    }).isRequired,
    isSongIdPlaying: PropTypes.func.isRequired,
    playSongId: PropTypes.func.isRequired,
    pauseSongId: PropTypes.func.isRequired,
    getListenerCount: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.audio = new Audio();

    // setting preload to none as we don't want to pre-download all the songs on the page
    this.audio.preload = 'none';
    const url = `${process.env.REACT_APP_API_HOST}/song/${props.data.id}.mp3`;
    this.audio.src = url;

    // call pause when the audio ends
    this.audio.onended = this.onPlayPauseClick;
  }

  componentWillReceiveProps(nextProps) {
    const { data: song } = nextProps;
    const isPlaying = nextProps.isSongIdPlaying(song.id);
    if (isPlaying) this.audio.play();
    else this.audio.pause();
  }

  onPlayPauseClick = () => {
    const { data: song } = this.props;
    const isPlaying = this.props.isSongIdPlaying(song.id);
    if (isPlaying) this.props.pauseSongId(song.id);
    else this.props.playSongId(song.id);
  };

  render() {
    const { data: song } = this.props;
    const isPlaying = this.props.isSongIdPlaying(song.id);
    const listenerCount = this.props.getListenerCount(song.id);
    return <Song data={song} onClick={this.onPlayPauseClick} isPlaying={isPlaying} listenerCount={listenerCount} />;
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
