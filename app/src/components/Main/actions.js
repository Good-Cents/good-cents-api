import * as action from './constants';
import authAPI from '../../api/authAPI';
import { getStoredToken } from '../../api/request';

export function signup(user) {
  return dispatch => {
    authAPI.signup(user)
    .then(({ token }) => {
      console.log('Token in Auth: ', token);
      dispatch({ type: action.GOT_TOKEN, payload: token });
    })
    .then(() => authAPI.getUser())
    .then(user => {
      dispatch({ type: action.ADDED_USER, payload: user });
    })
    .catch(error => {
      console.log('Error: ', error);
      dispatch({ type: action.AUTH_FAILED, payload: error});
    });
  };
}

export function signin(credentials) {
  return dispatch => {
    authAPI.signin(credentials)
      .then(({ token }) => {
        dispatch({ type: action.GOT_TOKEN, payload: token });
      })
      .then(() => authAPI.getUser())
      .then(user => {
        dispatch({ type: action.ADDED_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: action.AUTH_FAILED, payload: error });
      });
  };
}

