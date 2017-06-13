/* globals Plaid */
import React from 'react';
import plaidAPI from '../api/plaidAPI';

plaidAPI.postTransactions() 
.then( res => console.log('res:', res));

export default function UserTransactions() {
  return (
<div>
   TRANACTIONS HERE
</div>

  );
}