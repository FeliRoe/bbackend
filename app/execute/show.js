const Anzeige = require('../datenstruktur/show');
const { Op } = require("sequelize");
const Interessenten = require('../datenstruktur/interessenten');


    exports.erstelleInserat = async (req, res, next) => {
    
        const ANZEIGE = {
            createdOn : req.body.createdOn,
            createdBy : req.body.createdBy,
            softwareVersion: req.body.softwarVersion,
            customer: req.body.customer,
            type: req.body.entry.type,
            address: req.body.entry.address,
            postal: req.body.entry.postal,
            city: req.body.entry.city,
            size: req.body.entry.size,
            comment: req.body.entry.comment,
            shortHand: req.body.entry.shortHand,
        };

        Anzeige.create(ANZEIGE)
            .then(anzeige => {
                console.log('Ad created');
                res.status(201).json(anzeige);
            })
            .catch(error => {
                res.status(400).json({ message: "Ungültige Eingabe", error });
            });
    };
    
    exports.alleInserate = async (req, res, next) => {
        const address = req.query.address;
        const condition = address ? { address: { [Op.iLike]: `%${address}%` } } : null;
        Anzeige.findAll({ where: condition })
            .then(alle => {
                res.status(200).json(alle);
            })
            .catch(error => {
                res.status(500).json({ message: "Internal server error", error });
            });
    };
    
    exports.haeuser = async (req, res, next) => {
        Anzeige.findAll({ where: { type: 'house'} })
            .then(anzeige => {
                res.status(200).json(anzeige);
            })
            .catch(error => {
                res.status(500).json({ message: "Internal server error", error });
            });

    };
    
    exports.bauplaetze = async (req, res, next) => {
        Anzeige.findAll({ where: { type: 'construction-site'} })
            .then(anzeige => {
                res.status(200).json(anzeige);
            })
            .catch(error => {
                res.status(500).json({ message: "Internal server error", error });
            });
    };
    
    exports.wohnungen = async (req, res, next) => {
        Anzeige.findAll({ where: { type: 'apartment'} })
            .then(anzeige => {
                res.status(200).json(anzeige);
            })
            .catch(error => {
                res.status(500).json({ message: "Internal server error", error });
            });
    };
    
    exports.speziellInserat = async (req, res, next) => {
      const anzeige = await Anzeige.findByPk(req.params.id).then(
      (anzeige) => res.status(200).json(anzeige),
      (error) => res.status(500).json(error)
      );
      };
      
      exports.putInserat = async (req, res, next) => {

        const ANZEIGE = {
            createdOn : req.body.createdOn,
            createdBy : req.body.createdBy,
            softwareVersion: req.body.softwarVersion,
            customer: req.body.customer,
            type: req.body.entry.type,
            address: req.body.entry.address,
            postal: req.body.entry.postal,
            city: req.body.entry.city,
            size: req.body.entry.size,
            comment: req.body.entry.comment,
            shortHand: req.body.entry.shortHand,
        };


      Anzeige.update(ANZEIGE, { where: { id: req.params.id } }).then(
      (anzeige) => res.status(200).json(anzeige),
      (error) => res.status(500).json(error)
      );
      };

      //hier sollte es eine Funktion geben, welche sicherstellt, dass bei 3 Interessenten das Objekt nicht mehr zu löschen ist. 
      
      exports.loeschen = async (req, res, next) => {
      Anzeige.destroy({ where: { id: req.params.id } }).then(
      (anzeige) => res.status(200).json(anzeige),
      (error) => res.status(500).json(error)
      );
      };

      //Aufgabe: Bei mehr als 3 Interessenten, nicht löschbar
      //läuft nicht ohne Relationen
      
      exports.deleteOne = async (req, res, next) => {
        try {
          const id = req.params.id;
          const inserate = await Anzeige.findByPk(id);
      
          if (!inserate) {
            return res.status(404).json({ error: 'Inserate not found' });
          }
      
          const numOfInteressenten = await Interessenten.count({ where: { ObjektID: req.params.id } });
      
          if (numOfInteressenten >= 3) {
            return res.status(400).send('Interessent kann nicht gelöscht werden, weil mehr als 3 Interessenten eingetragen wurden.');
          }
      
          await inserate.destroy();
          return res.status(200).json({ message: 'Inserate deleted' });
        } catch (error) {
          return res.status(500).json(error);
        }
      };
      
