import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SongsList from './SongsList';
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
    return <p>{songsList}</p>;
    // return <SongList data={songList} />;
  }
}

const mapStateToProps = state => ({
  songsList: getSongList(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { fetchSongsList };

export default connect(mapStateToProps, mapDispatchToProps)(SongListContainer);
