import axios from '../../axios.init';

import * as actionTypes from './songs-list.actiontypes';

// eslint-disable-next-line import/prefer-default-export
export const fetchSongsList = () => (dispatch, getState) => {
  const state = getState();
  if (state.songsList.isLoading) return;
  dispatch({ type: actionTypes.FETCH_SONGLIST_REQUEST });
  axios.get('/song-list').then(({ data }) => dispatch({ type: actionTypes.FETCH_SONGLIST_RESPONSE, data }));
};
