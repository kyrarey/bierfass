const express = require("express");
const cartRouter = require("./cart");
const productsRouter = require("./products");
const userRouter = require("./users");
const reviewsRouter = require("./reviews");

const router = express.Router();

router.use("/users", userRouter);
router.use("/cart", cartRouter);
router.use("/products", productsRouter);
router.use("/reviews", reviewsRouter);

module.exports = router;
