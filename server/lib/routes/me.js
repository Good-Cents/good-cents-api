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
  });

module.exports = router;