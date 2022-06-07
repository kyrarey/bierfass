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

module.exports = router;
