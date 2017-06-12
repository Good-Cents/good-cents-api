const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(morgan('dev'));

// const goals = require('./routes/goals');
const users = require('./routes/users');
const plaid = require('./routes/plaid');

// app.use('/api/goals', goals);
app.use('/api/users', users);
app.use('/api/plaid', plaid);

module.exports = app;