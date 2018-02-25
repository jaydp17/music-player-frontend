import * as songActionTypes from '../modules/Song/song.actiontypes';

const defaultState = {
  songId: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case songActionTypes.PLAY_SONG_ID: {
      return { songId: action.payload };
    }
    case songActionTypes.PAUSE_SONG_ID: {
      return { songId: null };
    }
    default:
      return state;
  }
};
