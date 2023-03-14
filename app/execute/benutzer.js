const Benutzer = require('../datenstruktur/benutzer');

exports.getAllUsers = (req, res, next) => {
  const users = Benutzer.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

exports.getUserById = (req, res, next) => {
  const id = req.params.id;

  Benutzer.findByPk(id)
    .then((user) => {
      if (!user) {
        const error = new Error("Benutzer nicht gefunden.");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

exports.createUser = (req, res, next) => {
  const { username, email, password } = req.body;
  Benutzer.create({
    username,
    email,
    password,
  })
    .then((Benutzer) => {
      res.status(201).json(Benutzer);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

exports.updateUser = (req, res, next) => {
  const id = req.params.id;
  const { username, email, password } = req.body;

  Benutzer.findByPk(userId)
    .then((user) => {
      if (!user) {
        const error = new Error("Benutzer nicht gefunden.");
        error.statusCode = 404;
        throw error;
      }
      return user.update({
        username,
        email,
        password,
      });
    })
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;

  Benutzer.findByPk(userId)
    .then((user) => {
      if (!user) {
        const error = new Error("Benutzer nicht gefunden.");
        error.statusCode = 404;
        throw error;
      }
      return user.destroy();
    })
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
