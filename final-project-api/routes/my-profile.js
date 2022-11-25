const express = require('express');
const router = express.Router();

router.get('/{id}', (req, res) => {
  res.send('profile goes here');
});

router.get('/new', (req, res) => {
  res.send('new profile form goes here');
});

router.get('/{id}/edit', (req, res) => {
  res.send('profile EDIT form goes here');
});

router.put('/{id}', (req, res) => {
  res.send('profile UPDATE goes here');
});

// view would be different depending on userid/farm id - how



module.exports = router;