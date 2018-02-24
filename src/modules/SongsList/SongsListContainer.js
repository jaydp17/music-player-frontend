import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongsList from './SongsList';
import { getIsLoading, getSongList } from './songs-list.selector';
import { fetchSongsList } from './songs-list.actions';

class SongListContainer extends Component {
  static propTypes = {};

  componentDidMount() {
    this.props.fetchSongsList();
  }

  render() {
    const { songList, isLoading } = this.props;
    if (isLoading) {
      return <p>Loading....</p>;
    }
    return <p>songList</p>;
    // return <SongList data={songList} />;
  }
}

const mapStateToProps = state => ({
  songList: getSongList(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { fetchSongsList };

export default connect(mapStateToProps, mapDispatchToProps)(SongListContainer);
