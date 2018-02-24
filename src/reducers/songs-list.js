import * as songListActionTypes from '../modules/SongsList/songs-list.actiontypes';

const defaultState = {
  entities: {},
  isLoading: false,
};

const keyBy = (arr, keyName) =>
  arr.reduce((accumulator, element) => ({ ...accumulator, [element[keyName]]: element }), {});

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
        entities: keyBy(action.payload, 'id'),
      };
    }
    default:
      return state;
  }
};
