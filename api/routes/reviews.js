const express = require('express');
const router = express.Router();

//all reviews
router.get('/:idBeer', (req, res) => {
  ReviewProduct.findAll({ where: { idBeer: req.params.idBeer } }).then((cart) =>
    res.send(cart)
  );
});

//send review
router.get('/:idBeer', (req, res) => {
  ReviewProduct.findOne({ where: { idBeer: req.params.idBeer } }).then(
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
