import React from 'react';
import PropTypes from 'prop-types';

const Song = props => {
  const buttonText = props.isPlaying ? 'Pause' : 'Play';
  return (
    <span>
      <button onClick={props.onClick}>{buttonText}</button>
      {props.title}
    </span>
  );
};

Song.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Song;
