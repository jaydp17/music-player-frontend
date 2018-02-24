import io from 'socket.io-client';
import * as commonActionTypes from './common.actiontypes';
import * as songActionTypes from './modules/Song/song.actiontypes';

const socket = io(process.env.REACT_APP_API_HOST);
const eventName = 'listeners-change';

export default store => next => action => {
  // eslint-disable-next-line no-underscore-dangle
  if (socket._callbacks[`$${eventName}`] == null) {
    // Handler not present, install now
    socket.on(eventName, payload => {
      store.dispatch({
        type: commonActionTypes.OTHER_LISTENING_CHANGE,
        payload,
      });
    });
  }

  if (action.type === songActionTypes.PLAY_SONG_ID) {
    socket.emit('start-listening', action.payload);
  } else if (action.type === songActionTypes.PAUSE_SONG_ID) {
    socket.emit('stop-listening', action.payload);
  }

  next(action);
};
