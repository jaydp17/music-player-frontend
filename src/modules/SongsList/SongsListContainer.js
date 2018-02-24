import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Song from '../Song';
import { getIsLoading, getSongList } from './songs-list.selector';
import { fetchSongsList } from './songs-list.actions';

class SongListContainer extends Component {
  static propTypes = {
    fetchSongsList: PropTypes.func.isRequired,
    songsList: PropTypes.arrayOf(PropTypes.string).isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.fetchSongsList();
  }

  render() {
    const { songsList, isLoading } = this.props;
    if (isLoading) {
      return <p>Loading....</p>;
    }
    return songsList.map(songId => <Song id={songId} title={songId} key={songId} />);
  }
}

const mapStateToProps = state => ({
  songsList: getSongList(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { fetchSongsList };

export default connect(mapStateToProps, mapDispatchToProps)(SongListContainer);
