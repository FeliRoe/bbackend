const excecute = require('../execute/benutzer'); 
const router = require('express').Router();


router
  .get('/', excecute.getAllUsers)
  .get('/:id', excecute.getUserById)
  .post('/', excecute.createUser)
  .put('/:id', excecute.updateUser)
  .delete('/:id', excecute.deleteUser);

module.exports = router;
