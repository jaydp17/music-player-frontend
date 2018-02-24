import io from 'socket.io-client';
import { OTHER_LISTENING_CHANGE } from './common.actiontypes';

const socket = io(process.env.REACT_APP_API_HOST);
const eventName = 'listeners-change';

export default store => next => action => {
  // eslint-disable-next-line no-underscore-dangle
  if (socket._callbacks[`$${eventName}`] == null) {
    // Handler not present, install now
    socket.on(eventName, () => {
      store.dispatch({
        type: OTHER_LISTENING_CHANGE,
      });
    });
  }

  next(action);
};
