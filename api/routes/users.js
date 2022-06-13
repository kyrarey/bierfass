const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const passport = require('passport');

//registrar usuario nuevo
router.post('/register', (req, res) => {
  Users.create(req.body)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//autenticar usuario
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(req.user);
});

//logout usuario
router.post('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  }); //funcion de passport
});

//editar usuario
router.put('/:id', (req, res) => {
  Users.findByPk({ where: { id: req.params.id } })
    .then((user) => {
      user.update(req.body);
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//retornar usuario logeado
router.get('/me', (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.sendStatus(401);
  }
});

//pasar usuario a admin
router.put('/admin/:id', (req, res, next) => {
  const { id } = req.params;

  const response = (resUser) => ({
    id,
    firstName: resUser.contente,
    lastName: resUser.contente,
    admin: resUser.contente,
    email: resUser.contente,
    profilePhoto: resUser.contente,
  });

  Users.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      profilePhoto: req.body.profilePhoto,
      admin: req.body.admin,
      email: req.body.email,
    },
    {
      where: { id: req.params.id },
      returning: true,
    }
  )
    .then(([rows, result]) => {
      console.log(result[0]);
      res
        .status(201)
        .send(response(result[0]))
        .status(202);
    })
    .catch(next);
});

//como admin para eliminar usuarios
router.delete('/admin/:id', (req, res) => {
  Users.findByPk(req.params.id)
    .then((user) => {
      user.destroy(); //borra el usuario de la db(sequelize)
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//como admin ver todos los usuarios
router.get('/admin/users', (req, res) => {
  Users.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get('/admin/:id', (req, res) => {
  Users.findAll({ where: { id: req.params.id } })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
