const { DataTypes } = require('sequelize');
const db = require('../database');
const Address = require('./address');

const Resident = db.define('resident', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  debt: {
    type: DataTypes.NUMERIC,
    allowNull: false
  }
});

Resident.belongsTo(Address);

module.exports = Resident;