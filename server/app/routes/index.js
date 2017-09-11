'use strict';
/* eslint-disable new-cap */

const router = require('express').Router();
module.exports = router;

router.use('/athletes', require('./athletes'));

router.use(function (req, res) {
  res.status(404).end();
});
