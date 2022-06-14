const express = require("express");
const router = express.Router();
const Address = require("../models/Address");

router.post("/add", (req, res) => {
  Address.create(req.body)

    .then((address) => {
      res.status(201).send(address);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});



router.get("/:userId", (req, res)=>{
  Address.findAll({
    where:{ userId: req.params.userId}
  })
  .then((address) => {
    res.send(address);
  })
})


module.exports = router