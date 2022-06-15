const express = require("express");
const router = express.Router();
const Address = require("../models/Address");

router.post("/add", (req, res) => {
  console.log("entré", req.body)
  Address.create(req.body)

    .then((address) => {
      console.log(address);
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


router.delete("/:addressId", (req, res) => {
  console.log(req.params);
  Address.destroy({ where: { id: req.params.addressId } }).then(() =>
    res.sendStatus(202)
  );
});



module.exports = router