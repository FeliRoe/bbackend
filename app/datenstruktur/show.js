const Sequelize = require('sequelize');
const database = require('../util/database');


const Anzeige = database.define('Immobilien',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  createdOn: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  createdBy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  softwareVersion: {
    type: Sequelize.STRING,
    allowNull: true
  },
  customer: {
    type: Sequelize.STRING,
    allowNull: true},
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    postal: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    size: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    comment: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shortHand: {

      type: Sequelize.STRING,
      allowNull: false
    }
});



module.exports = Anzeige;
