const execute = require('../execute/bilder')
const express = require('express')
const { Router } = require('express')
const router = express.Router()
const multer = require('multer')

const speicher = multer.memoryStorage()
const hochladen = multer({storage: speicher})

router.get('/all', execute.getBilder);
router.delete('/:id', execute.deleteBild);
router.post('/', hochladen.single('image'), execute.uploadBild);

module.exports = router;
