require('dotenv').config();
const plaid = require('plaid');
const envvar = require('envvar');
const moment = require('moment');
const User = require('../models/user');

const Router = require('express').Router;
const router = Router();

const PLAID_CLIENT_ID = envvar.string('PLAID_CLIENT_ID');
const PLAID_SECRET = envvar.string('PLAID_SECRET');
const PLAID_PUBLIC_KEY = envvar.string('PLAID_PUBLIC_KEY');
const PLAID_ENV = envvar.string('PLAID_ENV', 'sandbox');

// Initalize Plaid's log-in and clients
const plaidClient = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments[PLAID_ENV]
);

// Initialize variables to be used
// (In production, store it in a secure persistent data store)
let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
let ITEM_ID = null;

// Get initial server up

// Get access token and create ITEM

router.post('/get_access_token', function (request, response) {
  PUBLIC_TOKEN = request.body.public_token;
  return plaidClient.exchangePublicToken(PUBLIC_TOKEN)
    .then(tokenResponse => {
      ACCESS_TOKEN = tokenResponse.access_token;
      ITEM_ID = tokenResponse.item_id;
      console.log('Access Token: ' + ACCESS_TOKEN);
      console.log('Item ID: ' + ITEM_ID);
      response.json({
        'error': false
      });
    })
    .catch(error => {
      const msg = 'Could not exchange public_token!';
      console.log(msg + '\n' + error);
      return response.json({
        error: msg
      });
    });
});

router.post('/set_access_token', function (request, response) {
  ACCESS_TOKEN = request.body.access_token;
  console.log('Access Token: ' + ACCESS_TOKEN);
  response.json({
    'error': false
  });
});

router.get('/accounts', function (request, response) {
  // Retrieve high-level account information and account and routing numbers
  // for each account associated with the Item.
  plaidClient.getAuth(ACCESS_TOKEN, function (error, authResponse) {
    if (error != null) {
      var msg = 'Unable to pull accounts from the Plaid API.';
      console.log(msg + '\n' + error);
      return response.json({
        error: msg
      });
    }

    console.log(authResponse.accounts);
    response.json({
      error: false,
      accounts: authResponse.accounts,
      numbers: authResponse.numbers,
    });
  });
});

router.post('/item', function (request, response, next) {
  // Pull the Item - this includes information about available products,
  // billed products, webhook information, and more.
  plaidClient.getItem(ACCESS_TOKEN, function (error, itemResponse) {
    if (error != null) {
      console.log(JSON.stringify(error));
      return response.json({
        error: error
      });
    }

    // Also pull information about the institution
    plaidClient.getInstitutionById(itemResponse.item.institution_id, function (err, instRes) {
      if (err != null) {
        var msg = 'Unable to pull institution information from the Plaid API.';
        console.log(msg + '\n' + error);
        return response.json({
          error: msg
        });
      } else {
        response.json({
          item: itemResponse.item,
          institution: instRes.institution,
        });
      }
    });
  });
});

router.post('/transactions', function (request, response, next) {
  // Pull transactions for the Item for the last 30 days
  let startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
  let endDate = moment().format('YYYY-MM-DD');
  plaidClient.getTransactions(ACCESS_TOKEN, startDate, endDate, {
    count: 250,
    offset: 0,
  }, function (error, transactionsResponse) {
    if (error != null) {
      console.log(JSON.stringify(error));
      return response.json({
        error: error
      });
    }
    console.log('pulled ' + transactionsResponse.transactions.length + ' transactions');
    response.json(transactionsResponse);
  });
});

module.exports = router;
