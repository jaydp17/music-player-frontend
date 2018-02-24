import * as actionTypes from './song.actiontypes';

export const playSongId = songId => dispatch => {
  dispatch({ type: actionTypes.PLAY_SONG_ID, payload: songId });
};

export const pauseSongId = songId => dispatch => {
  dispatch({ type: actionTypes.PAUSE_SONG_ID, payload: songId });
};
