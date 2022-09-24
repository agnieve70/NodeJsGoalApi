const express = require('express');

const emojis = require('./emojis');
const goals = require('./goals/goals.router');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/goals', goals);

module.exports = router;
