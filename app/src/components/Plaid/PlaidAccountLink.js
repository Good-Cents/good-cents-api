/* globals Plaid */
import React from 'react';
import { linkAccount } from './actions';
import store from '../../stores/store';
import '../../css/Onboard.css';

const handler = Plaid.create({
  apiVersion: 'v2',
  clientName: 'Plaid Walkthrough Demo',
  env: process.env.REACT_APP_PLAID_ENV,
  product: ['transactions'],
  key: process.env.REACT_APP_PLAID_PUBLIC_KEY,
  onSuccess: function (public_token) {
    store.dispatch(linkAccount(public_token));
  },
  onExit: function (err, metadata) {
    console.log('Error: ', err, metadata);
  }
});

export default function PlaidAccountLink() {
  return (
    <div>
      <button className="mainButton" onClick={() => handler.open()}>Link Bank Account</button>
    </div>
  );
}