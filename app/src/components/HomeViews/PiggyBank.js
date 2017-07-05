import React, { Component } from 'react';
import { connect } from 'react-redux';
var ProgressBar = require('progressbar.js');

class PiggyBank extends Component {
  componentDidMount() {
    const { transactions, piggybank } = this.props;
    const amount = (transactions && transactions.length) ? piggybank : 0;
    this.drawProgessBar(amount);
  }

  componentWillReceiveProps({ transactions, piggybank }) {
    if (transactions && transactions !== this.props.transactions && transactions.length) {
      this.drawProgessBar(piggybank);
    }
  }

  drawProgessBar(piggybank) {
    if (this.bar) this.bar.destroy();
    const bar = this.bar = new ProgressBar.Circle('#container', {
      color: '#0d97ff',
      // This has to be the same size as the maximum width to prevent clipping
      strokeWidth: 20,
      trailWidth: 5,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#0d97ff', width: 1 },
      to: { color: '#0d97ff', width: 5 },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(`$${piggybank.toFixed(2)}`);
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';
    bar.animate(1);
  }
  render() {
    let { piggybank } = this.props;
    return (
      <div>
        <div id='container'>
          {/*<p style={{
            color: '#0d97ff',
            fontSize: '2em',
          }}>${piggybank.toFixed(2)}</p>*/}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    transactions: state.transactions,
    piggybank: state.piggybank
  })
)(PiggyBank);