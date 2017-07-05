import React from 'react';
import ATM from '../../photos/illustrationATM.png';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import '../../css/Contribution.css';

function Success({ location, history, piggybank }) {
  return (
    <div className="Contribution">
      <img src={ATM} alt="Cash out" />
      <h2>Your transaction was successful!</h2>
      <p>Please check the email you have linked to this account for a receipt of this transactions.</p>
      <p>Be aware that, depending on your bank, this transfer may take up to 48 hours to appear in your balance. If you have any questions, please contact support.</p>
      <div className="buttonContainer">
        <Link to="/"><button
          className="mainButton">Return to Accounts
        </button></Link>
      </div>
    </div>
  );
}

export default withRouter(connect(
  state => ({
    user: state.user,
    piggybank: state.piggybank
  })
)(Success));