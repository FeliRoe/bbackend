const execute = require('../execute/interessenten');
const router = require('express').Router();


  router.get('/', execute.holalles);
  router.get('/:inseratId', execute.getNumber);
  router.post('/', execute.intressezeigen);

module.exports = router;