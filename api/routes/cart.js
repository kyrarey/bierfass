const express = require("express");
const router = express.Router();
const ShoppingCart = require("../models/ShoppingCart");
const Product = require("../models/Product");


//view shopping car
router.get("/:userId", (req, res) => {
  ShoppingCart.findAll({
    where: { userId: req.params.userId },
    include: Product 
    }).then((cart) => res.send(cart));
});

//Add product to cart
router.post("/add", (req, res) => {
  ShoppingCart.create(req.body).then((productAdded) =>
    res.status(201).send(productAdded)
  );
});

//Delete product
router.delete("/delete", (req, res) => {
  console.log("entre", req.body.shoppingCartId);
  ShoppingCart.destroy({ where: { id: req.body.shoppingCartId } })
  .then((x) => {
    console.log(x);
   return res.sendStatus(202)
  }
  );
});

//Edit cuantity
router.put("/edit/:shoppingCartId", function(req, res, next) {
  const { shoppingCartId } = req.params;

  // const response = (resCart) => ({
  //   idShop,
  //   email: resCart.content,
  // });

  ShoppingCart.update(
    {
      quantity: req.body.quantity,
    },
    {
      where: { id: req.params.shoppingCartId },
      returning: true,
    }
  )
    .then(([rows, result]) =>
      res.status(200).json({ quantity: req.body.quantity})
    )
    .catch(next);
});

module.exports = router;
