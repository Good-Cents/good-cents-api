import React from 'react';
import Carousel from 'nuka-carousel';
import Goals from '../photos/illustration-home-goal.png';
import ATM from '../photos/illustrationATM.png';
import WithYou from '../photos/illustrationWithYou.png';
import PlaidAccountLink from './Plaid/PlaidAccountLink';
import Loading from './Main/Loading';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Onboard.css';

function Onboard({ user, accounts, linking, location }) {
  if (linking) return <Loading />;
  //Accounts is set to the user object; debug redirects here
  if (user && accounts && accounts.length) return <Redirect to="/home" />;
  return (
    <div>
      <Carousel className="About">
        <div>
          <img src={Goals} alt="Goals" />
          <h2>Welcome to Good Cents!</h2>
          <p className="onboard-text">Start using your digital "spare change" to save toward a goal, or contribute to something good.</p>
        </div>
        <div>
          <img src={ATM} alt="ATM" />
          <h2>How it works:</h2>
          <p className="onboard-text">When you make a purchase, we'll tally your change to the nearest dollar and deposit your spare change into a digital piggy bank.</p>

        </div>
        <div>
          <img src={ATM} alt="ATM" />
          <h2>How it works:</h2>
          <p className="onboard-text">Just link one of your bank accounts or credit cards to Good Cents....and let the savings begin! Cash out or donate to one of our partner charities whenever you want.</p>
        </div>
        <div>
          <img src={WithYou} alt="WithYou" />
          <h2>Ready to get started?</h2>
          <p className="onboard-text">Click below to link your bank account.</p>
          <PlaidAccountLink />
        </div>
      </Carousel>
    </div>
  );
}

export default withRouter(connect(
  state => ({
    user: state.user,
    linking: state.linking,
    accounts: state.accounts
  }))(Onboard));