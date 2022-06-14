const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Product = require('../models/Product');
const Op = Sequelize.Op;
const Products = require('../models/Product');

//devuelve productos de la categoria pasada por parametro
router.get('/:id', (req, res) => {
  Product.findAll({ where: { id: req.params.id } })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//devuelve los productos que coinciden con el nombre pasado por parametro// necesario?
router.get('/:name', (req, res) => {
  Product.findAll({ where: { name: req.params.name } })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//products pagination
router.get('/list/:page', (req, res) => {
  let cant = req.params.page * 5;
  let offset = req.params.page === 1 ? 0 : cant - 5;
  Product.findAll({ limit: 5, offset: offset }).then((users) =>
    res.send(users)
  );
});

//all products
router.get('/', (req, res) => {
  Product.findAll().then((users) => res.send(users));
});

//One particular product
router.post('/search', (req, res) => {
  Product.findAll({
    where: { name: { [Op.like]: `%${req.body.search}%` } },
  }).then((users) => res.send(users));
});

//Add product

router.post("/add", (req, res) => {
  Product.create({
    name: req.body.name,
    origin: req.body.origin,
    price: req.body.price,
    size: req.body.size,
    type: req.body.type,
    alcoholPercentage: req.body.alcoholPercentage,
    brand: req.body.brand,
    urlImg: req.body.img,
  })
    .then((product) => res.send(product))
    .catch((err) => {
      res.status(400).send(err);
    });
});

// router.post('/', (req, res) => {
//   Product.findOne({
//     where: { idProductowner: req.body.idProductowner },
//   }).then((result) => {
//     if (result === null) {
//       Product.create(req.body).then((user) => res.status(201).send(user));
//     } else {
//       res.status(401).send();
//     }
//   });
// });

//Modify product
router.put('/:id', function(req, res, next) {
  const { id } = req.params;

  const response = (resProduct) => ({
    id,
    alcoholPercentage: resProduct.contente,
    size: resProduct.contente,
    price: resProduct.contente,
    name: resProduct.contente,
  });

  Product.update(
    {
      alcoholPercentage: req.body.alcoholPercentage,
      size: req.body.size,
      price: req.body.price,
      name: req.body.name,
    },
    {
      where: { id: req.params.id },
      returning: true,
    }
  )
    .then(([rows, result]) =>
      res
        .status(201)
        .send(response(result[0]))
        .status(202)
    )
    .catch(next);
});

//Delete product
router.delete('/', (req, res) => {
  Product.destroy({ where: { idBeer: req.body.idBeer } }).then(() =>
    res.sendStatus(202)
  );
});

module.exports = router;
