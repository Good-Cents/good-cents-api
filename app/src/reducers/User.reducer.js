import * as actions from '../constants/constant';
import { combineReducers } from 'redux';

const initialState = {
  user: {}
};

function user(state = initialState, action) {
  switch (action.type) {
    case actions.ADDED_USER:
      return action.payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

function token(state = null, action) {
  switch (action.type) {
    case actions.GOT_TOKEN:
      return action.payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  token
});

export default rootReducer;