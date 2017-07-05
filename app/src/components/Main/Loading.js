import React from 'react';
import Loader from 'halogen/ClipLoader';
import ATM from '../../photos/illustrationATM.png';
import '../../css/Onboard.css';

export default function Loading({ user, accounts }) {
  return (
    <div className="About">
      <img src={ATM} alt="Cash out" />
      <h2>Synching your accounts now...</h2>
      <h2>Thanks for your patience!</h2>
      <p>Average Load Time: 10 seconds</p>
      <Loader color="#0d97ff" size="30px" margin="4px" />
    </div>
  );
}