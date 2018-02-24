// TODO : code this reducer

import * as songListActionTypes from '../modules/SongList/song-list.actiontypes';

const defaultState = {
  entities: [],
  isLoading: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case songListActionTypes.FETCH_SONGLIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case songListActionTypes.FETCH_SONGLIST_RESPONSE: {
      return {
        ...state,
        isLoading: false,
        entities: action.payload,
      };
    }
    default:
      return state;
  }
};
