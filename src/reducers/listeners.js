import * as actionTypes from '../common.actiontypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LISTENERS_RESPONSE: {
      return state;
    }
    case actionTypes.OTHER_LISTENING_CHANGE: {
      const { songId, listenerCount } = action.payload;
      return {
        ...state,
        [songId]: listenerCount,
      };
    }
    default:
      return state;
  }
};
