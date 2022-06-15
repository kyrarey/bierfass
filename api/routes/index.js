const express = require("express");
const cartRouter = require("./cart");
const productsRouter = require("./products");
const userRouter = require("./users");
const reviewsRouter = require("./reviews");
const addressRouter = require("./address");
const mailRouter = require("./mail");
const shoppingHistory = require("./shoppingHistory");
const OrderDetail = require("./orderDetails");

const router = express.Router();

router.use("/users", userRouter);
router.use("/cart", cartRouter);
router.use("/products", productsRouter);
router.use("/reviews", reviewsRouter);
router.use("/address", addressRouter);
router.use("/mail", mailRouter);
router.use("/shoppingHistory", shoppingHistory);
router.use("/orderDetail", OrderDetail);

module.exports = router;
