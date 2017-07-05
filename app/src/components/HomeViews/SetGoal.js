import React, { Component } from 'react';
import GoalPic from '../photos/illustration-home-goal.png';
import '../css/SetGoal.css';

class SetGoal extends Component {
  constructor () {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="SetGoal">
        <img className="Pic" src={GoalPic} alt="goalpic"/>
        <h3 className="Button">Set A Goal</h3>
      </div>
    );
  }
}

export default SetGoal;