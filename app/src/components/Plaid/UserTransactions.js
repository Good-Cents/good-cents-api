import React, { Component } from 'react';
import plaidAPI from '../../api/plaidAPI';

export default class UserTransactions extends Component {

  componentDidMount() {
    plaidAPI.postTransactions()
      .then(res => console.log('res:', res));
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}