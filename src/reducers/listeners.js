import * as actionTypes from '../common.actiontypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ALL_LISTENING_CHANGE: {
      return action.payload;
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
