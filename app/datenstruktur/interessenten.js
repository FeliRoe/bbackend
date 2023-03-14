const Sequelize = require('sequelize');
const database = require('../util/database');


const Interessenten = database.define('Interessent',{
BenutzerID: {
    type: Sequelize.INTEGER,
    allowNull: true
},
ObjektID: {
    type: Sequelize.INTEGER,
    allowNull: true
}
});


module.exports = Interessenten;