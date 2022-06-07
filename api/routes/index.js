<<<<<<< HEAD
const express = require('express');
const userRouter = require('./cart');
const userRouter = require('./products');
const userRouter = require('./reviews');

const router = express.Router();

router.use('/cart', userRouter);
router.use('/products', userRouter);
router.use('/reviews', userRouter);
=======
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
>>>>>>> origin/routes-user

module.exports = router;
