const Interessenten = require('../datenstruktur/interessenten');

exports.holalles = async (req, res, next) => {
Interessenten.findAll()
.then(Interessenten => {
return res.status(200).json(Interessenten);
})
.catch(error => {
return res.status(500).json(error);
});
};

exports.intressezeigen = async (req, res, next) => {
const INTERESSENT = {
BenutzerID: req.body.BenutzerID,
ObjektID: req.body.ObjektID
};

Interessenten.create(INTERESSENT)
.then(Interessent => {
console.log('Interessent angelegt');
return res.status(201).json(Interessent)
})
.catch(error => {
return res.status(400).json({ message: 'Bad Request', error });
});
};

exports.getNumber = async (req, res, next) => {
Interessenten.findAndCountAll({ where: { ObjektID: req.params.ObjektID } })
.then(num => {
return res.status(200).json(num);
})
.catch(error => {
return res.status(404).json({ message: 'Not Found', error });
});
};
