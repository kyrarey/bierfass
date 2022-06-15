const express = require("express");
const cartRouter = require("./cart");
const productsRouter = require("./products");
const userRouter = require("./users");
const reviewsRouter = require("./reviews");
const addressRouter = require("./address");
const mailRouter = require("./mail");

const router = express.Router();

router.use("/users", userRouter);
router.use("/cart", cartRouter);
router.use("/products", productsRouter);
router.use("/reviews", reviewsRouter);
router.use("/address", addressRouter);
router.use("/mail", mailRouter);

module.exports = router;
