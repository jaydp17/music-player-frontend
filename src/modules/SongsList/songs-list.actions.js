import axios from '../../axios.init';

import * as actionTypes from './songs-list.actiontypes';

// eslint-disable-next-line import/prefer-default-export
export const fetchSongsList = () => async (dispatch, getState) => {
  const state = getState();
  if (state.songsList.isLoading) return;
  dispatch({ type: actionTypes.FETCH_SONGLIST_REQUEST });
  const result = await axios.get('/songs-list');
  dispatch({ type: actionTypes.FETCH_SONGLIST_RESPONSE, payload: result.data });
};
