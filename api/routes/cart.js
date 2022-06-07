const express = require('express');
const router = express.Router();

//View Cart
router.get('/', (req, res) => {
  Cart.findAll().then((cart) => res.send(cart));
});

//Add product to cart
router.post('/', (req, res) => {
  Cart.findOne({ where: {} }).then((result) => {
    if (result === null) {
      Cart.create(req.body).then((user) => res.status(201).send(user));
    } else {
      //sumar cantidad
    }
  });
});

//Delete product
router.delete('/', (req, res) => {
  Cart.destroy({ where: { idBeer: req.body.idBeer } }).then(() =>
    res.sendStatus(202)
  );
});

//Edit cuantity
router.put('/', function (req, res, next) {
  const { idShop } = req.params;

  const response = (resCart) => ({
    idShop,
    email: resCart.content,
  });

  Cart.update(
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

module.exports = router;
