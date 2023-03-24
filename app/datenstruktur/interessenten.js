const Sequelize = require('sequelize');
const database = require('../util/database');

// Benutzer nicht gebaut 
// Inserat ID und ID statische Tabelle bauen -> select count über Inserat ID

const Interessenten = database.define('Interessenten',{
ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
ObjektID: {
    type: Sequelize.INTEGER,
    allowNull: true
}
});


module.exports = Interessenten;