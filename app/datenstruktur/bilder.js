const database = require('../util/database');
const DataTypes = require('sequelize');

const bilder = database.define('Photo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  ObjektID:{
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

module.exports = bilder;
