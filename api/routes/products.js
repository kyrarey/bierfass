<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//all products
router.get('/', (req, res) => {
  Products.findAll().then((users) => res.send(users));
});

//One particular product
router.post('/search', (req, res) => {
  Products.findAll({
    where: { name: { [Op.like]: `%${req.body.search}%` } },
  }).then((users) => res.send(users));
});

//Add product
router.post('/new', (req, res) => {
  Products.findOne({
    where: { name: req.body.email, marca: req.body.marca },
  }).then((result) => {
    if (result === null) {
      Products.create(req.body).then((user) => res.status(201).send(user));
    } else {
      res.status(401).send();
    }
  });
});

//Modify product
router.put('/', function (req, res, next) {
  const { alcohol_porcentaje, size, price, name } = req.params;

  const response = (resCart) => ({
    idShop,
    email: resCart.content,
  });

  Products.update(
    {
      quantity: req.body.quantity,
    },
    {
      where: { id: req.params.id },
      returning: true,
    }
  )
    .then(([rows, result]) =>
      res.status(201).send(response(result[0])).status(202)
    )
    .catch(next);
});

//Delete product
router.delete('/', (req, res) => {
  Products.destroy({ where: { idBeer: req.body.idBeer } }).then(() =>
    res.sendStatus(202)
  );
});
=======
const express = require("express");
const router = express.Router();
const { Products } = require("../models");

//devuelve productos de la categoria pasada por parametro
router.get("/products/:id", (req, res) => {
  Products.findAll({ where: { id: req.params.id } })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//devuelve los productos que coinciden con el nombre pasado por parametro
router.get("/products/:name", (req, res) => {
  Products.findAll({ where: { name: req.params.name } })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

>>>>>>> origin/routes-user
module.exports = router;
