const plaidClient = require('../plaid');
const moment = require('moment');

const Router = require('express').Router;
const router = Router();
const User = require('../models/user');

router
  .get('/', (req, res, next) => {
    const id = req.user.id;
    User.findById(id)
      .then(user => {
        if (!user) return res.status(404).send(`${id} is not a user`);
        else res.send(user);
      })
      .catch(next);
  })

  // Get access token and create ITEM
  .post('/accounts', (request, response) => {
    let public_token = request.body.public_token;
    const plaidPromise = plaidClient.exchangePublicToken(public_token)
      .then(tokenResponse => {
        return Promise.all([
          tokenResponse,
          plaidClient.getAuth(tokenResponse.access_token)
        ]);
      });
    Promise.all([
      plaidPromise,
      User.findById(request.user.id)
    ])
      .then(([[token, auth], user]) => {
        user.plaid = {
          plaid_item_id: token.item_id,
          access_token: token.access_token,
          accounts: auth.accounts,
          transactions: []
        };
        return user.save();
      })
      .then(user => {
        response.send(user.plaid.accounts);
      })
      .catch(err => {
        console.log(err);
      });
  })

  .get('/transactions', (req, res) => {
    // Pull transactions for the Item for the last 30 days
    let startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
    let endDate = moment().format('YYYY-MM-DD');
    User.findById(req.user.id)
      .lean()
      .select('plaid.access_token')
      .then(user => user.plaid.access_token)
      .then(token => {
        return plaidClient.getTransactions(token, startDate, endDate, {
          count: 250,
          offset: 0,
        });
      })
      .then(transactionsResponse => {
        console.log('pulled ' + transactionsResponse.transactions.length + ' transactions');
        res.send(transactionsResponse);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        return res.json({
          error: error
        });
      });
  });
//
module.exports = router;