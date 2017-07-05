import React from 'react';
import '../../css/Transactions.css';

export default function Transaction({ name, amount, date, cents }) {
  return (
    <div className="TransContainer">
      <h5>{name}</h5>
      <p>${amount} / {date} <br/>You earned ${cents.toFixed(2)} cents.</p>
    </div>
  );
}