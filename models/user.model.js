const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db')
const User = db.define('user', {
  // Model attributes are defined here

  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
    modelName:"users",
    timestamps: false
  // Other model options go here
});

module.exports = User;