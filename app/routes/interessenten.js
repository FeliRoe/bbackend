const execute = require('../execute/interessenten');
const router = require('express').Router();

router
  .get('/', execute.holalles) 
  .get('/:ObjektID', execute.getNumber) 
  .post('/', execute.intressezeigen)  

module.exports = router;