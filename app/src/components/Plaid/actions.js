import plaidAPI from '../../api/plaidAPI';
import * as action from '../Main/constants';
export const LINK_ACCOUNT = 'LINK_ACCOUNT';
export const LINKING_ACCOUNT = 'LINKING_ACCOUNT';
export const GOT_TRANSACTIONS = 'GOT_TRANSACTIONS';
export const CASHING_OUT = 'CASHING_OUT';
export const CASH_OUT = 'CASH_OUT';

export function linkAccount(public_token) {
  return dispatch => {
    dispatch({ type: LINKING_ACCOUNT });
    plaidAPI.postAccessToken(public_token)
      .then(accounts => {
        dispatch({ type: LINK_ACCOUNT, payload: accounts });
      })
      .catch(err => console.log(err));
  };
}

export function getTransactions(access_token) {
  return dispatch => {
    plaidAPI.getTransactions(access_token)
      .then(res => {
        let total = 0;
        let trans = res.transactions.map(trans => {
          let start = trans.amount;
          let end = Math.ceil(trans.amount);
          let cents = end - start;
          total += cents;
          return {
            name: trans.name,
            amount: trans.amount,
            cents: cents,
            date: trans.date,
          };
        });
        trans.total = total;

        dispatch({
          type: GOT_TRANSACTIONS,
          payload: trans
        });
      })
      .catch(err => console.log(err));
  };
}

//TODO: Make cashout function work; not triggering
export function cashingOut() {
  return dispatch => {
    dispatch({ type: CASHING_OUT });
    setTimeout(() =>
      dispatch({ type: CASH_OUT })
      , 5000);
  };
}

