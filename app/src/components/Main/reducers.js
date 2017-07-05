import * as actions from './constants';
import { combineReducers } from 'redux';
import * as plaidActions from '../Plaid/actions';

function error(state = null, action) {
  switch (action.type) {
    case actions.AUTH_FAILED:
      return action.payload;
    case actions.ADDED_USER:
    case actions.LOGOUT:
      return null;
    default:
      return state;
  }
}

function user(state = null, action) {
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

function linking(state = false, action) {
  switch (action.type) {
    case plaidActions.LINKING_ACCOUNT:
    case plaidActions.CASHING_OUT:
      return true;
    case plaidActions.LINK_ACCOUNT:
    case plaidActions.CASH_OUT:
      return false;
    default:
      return state;
  }
}

function accounts(state = null, action) {
  switch (action.type) {
    case plaidActions.LINK_ACCOUNT:
      return action.payload;
    case actions.ADDED_USER:
      return action.payload.plaid.accounts;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

function transactions(state = null, action) {
  switch (action.type) {
    case plaidActions.GOT_TRANSACTIONS:
      return action.payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

function piggybank(state = 0, action) {
  switch (action.type) {
    case plaidActions.GOT_TRANSACTIONS:
      return action.payload.total;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
    case plaidActions.CASHING_OUT:
    case plaidActions.CASH_OUT:
      return 0;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  token,
  linking,
  accounts,
  piggybank,
  transactions,
  error
});

export default rootReducer;