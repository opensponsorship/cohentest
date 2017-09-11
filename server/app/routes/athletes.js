'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Athlete = models.Athlete;
module.exports = router;

router.get('/', function (req, res, next) {
  Athlete.findAll()
  .then(athletes => res.json(athletes))
  .catch(next)
});

router.post('/', function (req, res, next) {
  Athlete.create(req.body)
  .then(athlete => res.status(201).json(athlete))
  .catch(next)
})

router.put('/:id', function(req, res, next) {
  Athlete.findById(req.params.id)
  .then(athlete => (athlete.update(req.body)))
  .then(athlete => res.json(athlete))
  .catch(next)
})
