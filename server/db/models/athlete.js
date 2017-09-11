'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

const Athlete = db.define('athlete', {
  name: {
    type: DataTypes.STRING
  },
  sport: {
    type: DataTypes.STRING
  },
  nationality: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING
  },
  dob: {
    type: DataTypes.STRING
  },
})

module.exports = Athlete;
