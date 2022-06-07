const express = require('express');
const userRouter = require('./cart');
const userRouter = require('./products');
const userRouter = require('./reviews');

const router = express.Router();

router.use('/cart', userRouter);
router.use('/products', userRouter);
router.use('/reviews', userRouter);

module.exports = router;
