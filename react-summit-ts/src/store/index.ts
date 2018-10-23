import { combineReducers, createStore } from 'redux';

// module imports
import user from './modules/user';

const rootReducer = {
  user,
};

export default createStore(combineReducers(rootReducer), {});