import React from 'react';
import ATM from '../../photos/illustrationATM.png';
import piggybankRemoveIMG from '../../photos/piggybank-removing.svg';
import { connect } from 'react-redux';
import { cashingOut } from '../Plaid/actions';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import ContributionLoading from './ContributionLoading';
import '../../css/Contribution.css';

function Contribution({ linking, location, history, piggybank, cashingOut }) {
  if (linking) return <ContributionLoading />;
  if (!piggybank) return <Redirect to="/success" />;
  return (
    <div>
      <Switch>
        <Route path="/cashout/options" component={() => (
          <div className="Contribution">
            <img src={ATM} alt="Cash out" />
            <h2>Nice job!</h2>
            <h3>Ready to cash out ${piggybank.toFixed(2)}?</h3>
            <p>Choose one of the options below:</p>
            <div className="buttonContainer">
              <Link to="/cashout/confirm-aclu"><button className="mainButton">Donate to ACLU</button></Link>
              <Link to="/cashout/confirm-naturecon"><button className="mainButton">Donate to Nature Conservatory</button></Link>
              <Link to="/cashout/confirm-deposit"><button className="mainButton">Deposit into Savings</button></Link>
            </div>
          </div>
        )} />
        <Route path="/cashout/confirm-aclu" render={() => (
          <div>
            <h2>Confirmation</h2>
            <img className="piggy-icon" src={piggybankRemoveIMG} alt="Cash out" />
            <p>Are you sure you want to donate ${piggybank.toFixed(2)} to the ACLU?</p>
            <div className="buttonContainer">
              <button className="mainButton" onClick={() => cashingOut()}>Yes, I'm Sure!</button>
              <Link to="/cashout/options"><button className="mainButton">No, Take Me Back</button></Link>
            </div>
          </div>
        )} />
        <Route path="/cashout/confirm-naturecon" render={() => (
          <div>
            <h2>Confirmation</h2>
            <img className="piggy-icon" src={piggybankRemoveIMG} alt="Cash out" />
            <p>Are you sure you want to donate ${piggybank.toFixed(2)} to the Nature Conservatory?</p>
            <div className="buttonContainer">
              <button className="mainButton" onClick={() => cashingOut()}>Yes, I'm Sure!</button>
              <Link to="/cashout/options"><button className="mainButton">No, Take Me Back</button></Link>
            </div>
          </div>
        )} />
        <Route path="/cashout/confirm-deposit" render={() => (
          <div>
            <h2>Confirmation</h2>
            <img className="piggy-icon" src={piggybankRemoveIMG} alt="Cash out" />
            <p>Are you sure you want to deposit ${piggybank.toFixed(2)} into your savings?</p>
            <div className="buttonContainer">
              <button className="mainButton" onClick={() => cashingOut()}>Yes, I'm Sure!</button>
              <Link to="/cashout/options"><button className="mainButton">No, Take Me Back</button></Link>
            </div>
          </div>
        )} />
      </Switch>
    </div>
  );
}

export default withRouter(connect(
  state => ({
    user: state.user,
    linking: state.linking,
    piggybank: state.piggybank
  }),
  dispatch => ({
    cashingOut() { dispatch(cashingOut()); }
  })
)(Contribution));