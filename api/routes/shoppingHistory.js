const express = require("express");
const router = express.Router();
const ShoppingHistory = require("../models/ShoppingHistory");
const OrderDetail = require("../models/OrderDetail");
const ShoppingCart = require("../models/ShoppingCart");
const Product = require("../models/Product")

router.post("/newOrder", (req, res) => {

  let detail = req.body.detail.map((oneproduct) => {
    return {
      productName: oneproduct.product.name,
      quantity: oneproduct.quantity,
      price: oneproduct.product.price,
      userId: oneproduct.userId,
      productId: oneproduct.product.id,
    };

  });


  let { selectedEmail, address, payMethod, userId, finalPrice } = req.body;
  let order = {selectedEmail:selectedEmail, address:address, payMethod:payMethod, userId:userId, finalPrice:finalPrice}

  ShoppingHistory.create(order).then((newhistory) => {

      detail.forEach(element => {
        element.shoppingHistoryId = newhistory.id;
      });

  

      OrderDetail.bulkCreate(detail).then((newDetail) => {
   
          ShoppingCart.destroy({ where: { userId: userId } }).then((x) => {
            res.sendStatus(201);
          }).catch(()=>{
            console.log('error deleting shopping cart');
          });
        })
        .catch((err) => {
          console.log('error creating detail', err);
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      console.log('error creating order', err);
      res.status(400).send(err);
    });
});

router.get("/history/:userId", (req, res) => {
  OrderDetail.findAll({
    where: { userId: req.params.userId },
    include: ShoppingHistory,
  })
    .then((histories) => {
      res.send(histories);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});



router.get("/:id", (req, res) => {
  ShoppingHistory.findByPk({
    where: { id: req.params.id },
  })
    .then((onehistories) => {
      res.send(onehistories);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
