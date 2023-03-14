const { Sequelize } = require('sequelize');
const {bilder} = require('../datenstruktur/bilder');

exports.uploadBild = async (req, res) => {
  try {
    const bild = await bilder.create({
     image : req.file.buffer,
      ObjektID: req.body.ObjektID
    });
    res.status(200).send("Bild erfolgreich hochgeladen");
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  }
};

exports.deleteBild = async (req, res) => {
  try {
    const id = req.params.id;
    const bild = await bilder.findByPk(id);
    if (bild) {
      await bild.destroy();
      res.status(200).send('Bild erfolgreich gelöscht');
    } else {
      res.status(404).send('Bild nicht gefunden');
    }
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.getBilder = async (req, res) => {
  try {
    const bild = await bilder.findAll();
    res.status(200).json(bild);
  } catch (e) {
    res.status(500).send(e);
  }
};
