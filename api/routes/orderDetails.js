const express = require("express");
const router = express.Router();
const OrderDetail = require("../models/OrderDetail")

router.post("/postDetail", (req, res) => {
  console.log("entre");
    OrderDetail.create(req.body)
    .then((newDetail) => {
        res.status(201).send(newDetail);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  })

  router.get("/:userId",  (req, res)=>{
    OrderDetail.findAll({
      where:{ userId: req.params.userId}
    })
    .then((histories) => {
      res.send(histories);
    })
  })

  module.exports = router