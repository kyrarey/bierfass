const express = require('express');
const router = express.Router();
const ReviewProduct = require('../models/ReviewProduct');

//all reviews
router.get('/:productId', (req, res) => {
  console.log('entre', req.body);
  ReviewProduct.findAll({ where: { productId: req.params.productId } }).then(
    (cart) => {
      console.log(cart);
      res.send(cart);
    }
  );
});

//send review
router.post('/:idBeer', (req, res) => {
  ReviewProduct.findOne({ where: { idUser: req.body.idUser } }).then(
    (result) => {
      if (result === null) {
        ReviewProduct.create(req.body).then((user) =>
          res.status(201).send(user)
        );
      } else {
        res.status(401).send();
      }
    }
  );
});

module.exports = router;
