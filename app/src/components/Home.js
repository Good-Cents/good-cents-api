import React, { Component } from 'react';
import '../css/Home.css';
import Transactions from './HomeViews/Transactions';
import PiggyBank from './HomeViews/PiggyBank';
import User from './HomeViews/User';
import {
  Redirect,
  Link,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { checkForToken } from './Main/actions';


class Home extends Component {
  render() {
    const { user } = this.props;
    if (!user) return <Redirect to="/" />;
    return (
      <section>
        <div className="Home">
          <div className="PiggyContainer">
            <h3>Your Balance:</h3>
            <PiggyBank />
            <div className="ButtonsContainer">
              <div className="ButtonsBox"><Link to='/cashout/options'><button className="mainButton">Donate</button></Link></div>
              <div className="ButtonsBox"><Link to='/cashout/options'><button className="mainButton">Cash Out</button></Link></div>
            </div>
          </div>
          <div className="UserContainer">
            <div className="UserBox">
              <User />
            </div>
          </div>
          <br></br>
          <div className="TransactionsContainer">
            <Transactions />
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(connect(
  state => ({ user: state.user }),
  dispatch => ({
    checkForToken() { dispatch(checkForToken()); }
  })
)(Home));