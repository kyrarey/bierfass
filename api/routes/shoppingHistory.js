const express = require("express");
const router = express.Router();
const ShoppingHistory = require("../models/ShoppingHistory")

router.post("/newOrder", (req, res) => {
    ShoppingHistory.create(req.body)
  
      .then((newhistory) => {
        res.status(201).send(newhistory);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  })

  router.get("/history/:userId",  (req, res)=>{
    ShoppingHistory.findAll({
      where:{ userId: req.params.userId}
    })
    .then((histories) => {
      res.send(histories);
    })
  })



module.exports = router