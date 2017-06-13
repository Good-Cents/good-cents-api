import React from 'react';
import Carousel from 'nuka-carousel';
import Goals from '../photos/illustration-home-goal.png';
import ATM from '../photos/illustrationATM.png';
import WithYou from '../photos/illustrationWithYou.png';
import PlaidAccountLink from './Plaid/PlaidAccountLink';

import '../css/About.css';

function About() {
  return (
    <div>
      <Carousel className="About">
        <div>
            <img src={Goals} alt="Goals" />
            <h2>Set your goals to start saving it could be a <br/>goal for literally anything !!</h2>
        </div>
        <div>
            <img src={ATM} alt="ATM" />
            <h2>We act as your personal piggybank to start <br/>saving and you can withdraw whenever you hit your goal!!</h2>
        </div>
        <div>
            <img src={WithYou} alt="WithYou" />
            <h2>Link Your Bank Acount Now</h2>
              <PlaidAccountLink />
        </div>
      </Carousel>
    </div>
  );
}


export default About;