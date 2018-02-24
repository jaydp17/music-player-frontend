import { combineReducers } from 'redux';

import songsList from './songs-list';
import playing from './playing';
import listeners from './listeners';

export default combineReducers({ songsList, playing, listeners });
