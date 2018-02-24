import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/media-has-caption */
const Song = props => {
  const buttonText = props.isPlaying ? 'Pause' : 'Play';
  return (
    <span>
      <audio>
        <source src={props.url} type="audio/mpeg" preload="none" />
      </audio>
      <button onClick={props.onClick}>{buttonText}</button>
      {props.title}
    </span>
  );
};

Song.propTypes = {
  url: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Song.defaultProps = {
  url: null,
};

export default Song;
