/* globals Plaid */
import React from 'react';
import plaidAPI from '../../api/plaidAPI';

const handler = Plaid.create({
  apiVersion: 'v2',
  clientName: 'Plaid Walkthrough Demo',
  env: process.env.REACT_APP_PLAID_ENV,
  product: ['transactions'],
  key: process.env.REACT_APP_PLAID_PUBLIC_KEY,
  onSuccess: function (public_token) {
    plaidAPI.getAccessToken(public_token)
      .then(res => console.log('res:', res));
  },
  onExit: function (err, metadata) {
    console.log('Error: ', err, metadata);
  }
});

export default function PlaidAccountLink() {
  return (
    <div>
      Welcome to Good Cents! Link your bank account below:
        <button onClick={() => handler.open()}>Link Bank Account</button>
    </div>
  );
}