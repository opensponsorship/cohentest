'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

const Athlete = db.define('athlete', {
  name: {
    type: DataTypes.STRING
  },
  sports: {
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
  location: {
    type: DataTypes.STRING
  },
  association: {
    type: DataTypes.STRING
  },
  team: {
    type: DataTypes.STRING
  },
  about: {
    type: DataTypes.STRING
  },
  married: {
    type: DataTypes.BOOLEAN
  },
  twitter: {
    type: DataTypes.STRING
  }
})

module.exports = Athlete;
