// const router = require('express').Router();
// const User = require('../models/user');
// const ensureAuth = require('../auth/ensure-auth')();
// const tokenService = require('../auth/token-service');

// function hasEmailAndPassword(req, res, next) {
//     const user = req.body;
//     if (!user.email || !user.password) {
//         return next({
//             code: 400,
//             error: 'Email and password must be entered.'
//         });
//     }
//     next();
// }