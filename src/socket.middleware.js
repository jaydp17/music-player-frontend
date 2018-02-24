import io from 'socket.io-client';
import * as commonActionTypes from './common.actiontypes';
import * as songActionTypes from './modules/Song/song.actiontypes';

const socket = io(process.env.REACT_APP_API_HOST);

const LISTENER_CHANGE_CHANNEL = 'listeners-change';
const ALL_LISTEN_COUNT_CHANNEL = 'all-listen-count';
const START_LISTENING_CHANNEL = 'start-listening';
const STOP_LISTENING_CHANNEL = 'stop-listening';

// eslint-disable-next-line no-underscore-dangle
const channelHandlerExists = channel => socket._callbacks[`$${channel}`] != null;

export default store => next => action => {
  if (!channelHandlerExists(LISTENER_CHANGE_CHANNEL)) {
    // install listener change channel handler
    socket.on(LISTENER_CHANGE_CHANNEL, payload => {
      store.dispatch({
        type: commonActionTypes.OTHER_LISTENING_CHANGE,
        payload,
      });
    });
  }

  if (!channelHandlerExists(ALL_LISTEN_COUNT_CHANNEL)) {
    // install all listen count channel handler
    socket.on(ALL_LISTEN_COUNT_CHANNEL, payload => {
      store.dispatch({
        type: commonActionTypes.ALL_LISTENING_CHANGE,
        payload,
      });
    });
  }

  if (action.type === songActionTypes.PLAY_SONG_ID) {
    socket.emit(START_LISTENING_CHANNEL, action.payload);
  } else if (action.type === songActionTypes.PAUSE_SONG_ID) {
    socket.emit(STOP_LISTENING_CHANNEL, action.payload);
  }

  next(action);
};
