import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import ListItem from 'material-ui/List/ListItem';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-outline';
import PauseIcon from 'material-ui/svg-icons/av/pause-circle-outline';

const Song = props => {
  const leftAvatar = <Avatar src="https://www.bensound.com/bensound-img/anewbeginning.jpg" />;
  const playControl = (
    <Checkbox
      checkedIcon={<PauseIcon />}
      uncheckedIcon={<PlayIcon />}
      style={{ marginLeft: '50px' }}
      checked={props.isPlaying}
      onClick={props.onClick}
    />
  );
  const listenerCountEl = <Avatar>{props.listenerCount}</Avatar>;
  return (
    <ListItem
      primaryText={props.title}
      leftAvatar={leftAvatar}
      secondaryText="Jaydp"
      leftCheckbox={playControl}
      rightAvatar={listenerCountEl}
    />
  );
};

Song.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  listenerCount: PropTypes.number.isRequired,
};

export default Song;
