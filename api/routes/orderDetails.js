const express = require("express");
const router = express.Router();
const OrderDetail = require("../models/OrderDetail")

router.post("/postDetail", (req, res) => {
    OrderDetail.create(req.body)
  
      .then((newDetail) => {
        res.status(201).send(newDetail);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  })

  module.exports = router