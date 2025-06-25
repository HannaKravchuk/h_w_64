const express = require('express');
const router = express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).send('Not authorized');
}

router.get('/', ensureAuthenticated, (req, res) => {
  res.send(`Hello, ${req.user.email}. You accessed a protected route!`);
});

module.exports = router;
