import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from 'material-ui/List/List';
import Song from '../Song';
import { getIsLoading, getSongList } from './songs-list.selector';
import { fetchSongsList } from './songs-list.actions';

class SongListContainer extends Component {
  static propTypes = {
    fetchSongsList: PropTypes.func.isRequired,
    songsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        singer: PropTypes.string.isRequired,
        art: PropTypes.string.isRequired,
      })
    ).isRequired,
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
    const listItems = songsList.map(song => <Song data={song} key={song.id} />);
    return <List>{listItems}</List>;
  }
}

const mapStateToProps = state => ({
  songsList: getSongList(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { fetchSongsList };

export default connect(mapStateToProps, mapDispatchToProps)(SongListContainer);
