import { combineReducers } from 'redux';

import songsList from './songs-list';
import playing from './playing';

export default combineReducers({ songsList, playing });
