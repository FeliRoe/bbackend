const execute = require('../execute/interessenten');
const router = require('express').Router();

router
  .get('/', execute.holalles) 
  .get('/:inseratId', execute.getNumber) 
  .post('/', execute.intressezeigen)  

module.exports = router;