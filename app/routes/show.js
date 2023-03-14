
const excecute = require('../execute/show');
const router = require('express').Router();


router.get('/', excecute.alleInserate)
router.get('/houses', excecute.haeuser);
router.get('/construction-sites', excecute.bauplaetze);
router.get('/apartments', excecute.wohnungen);
router.get('/:id', excecute.speziellInserat);  
router.post('/', excecute.erstelleInserat);
router.get('/:id', excecute.speziellInserat);  
router.put('/:id', excecute.putInserat);
router.delete('/:id', excecute.loeschen);
  

module.exports = router;
