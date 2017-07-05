import React, { Component } from 'react';
import '../../css/Transactions.css';
import { connect } from 'react-redux';
import { getTransactions } from '../Plaid/actions';
import Transaction from './Transaction';

class Transactions extends Component {
  constructor() {
    super();
    this.transactions = this.transactions.bind(this);
  }

  transactions() {
    this.props.getTransactions(this.props.user.plaid.access_token);
  }

  render() {
    return (
      <div className="Transactions">
        <h1 className="headers">Transactions</h1>
        <ul className="applist">
          {this.props.transactions &&
            this.props.transactions.slice(0, 15).map((trans, i) => {
              return <Transaction
                key={i}
                {...trans} />;
            })}
        </ul>
        <button className="mainButton" onClick={this.transactions}>Sync Transactions</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    transactions: state.transactions
  }),
  dispatch => ({
    getTransactions() { dispatch(getTransactions()); }
  })
)(Transactions);