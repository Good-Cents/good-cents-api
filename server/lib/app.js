const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ensureAuth = require('./auth/ensure-auth')();

app.use(bodyParser.json());
app.use(morgan('dev'));

// const goals = require('./routes/goals');
const users = require('./routes/users');
const plaid = require('./routes/plaid');
const auth = require('./routes/auth');
const me = require('./routes/me');

// app.use('/api/goals', goals);
app.use('/api/users', users);
app.use('/api/plaid', plaid);
app.use('/api/auth', auth);
app.use('/api/me', ensureAuth, me);

module.exports = app;