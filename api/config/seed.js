const db = require('./dbConnection');
const Product = require('../models/Product');
const Users = require('../models/Users');
const ReviewProduct = require('../models/ReviewProduct');
const seedProducts = require('../../utils/seedProducts');
const seedUsers = require('../../utils/seedUsers');
const seedReviews = require('../../utils/seedReviews');

const setupSeed = async () => {
  try {
    console.log('starting seed');
    const products = await Product.bulkCreate(seedProducts);
    const users = await Users.bulkCreate(seedUsers);
    const reviews = await ReviewProduct.bulkCreate(seedReviews);
    console.log('seed succesfully');
    Promise.all([products, users, reviews]);
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  try {
    const sync = await db.sync({ force: false });
    const setSeed = await setupSeed();
    const exit = await process.exit(0);
    Promise.all([sync, setSeed, exit]);
  } catch (error) {
    console.log(error);
    await process.exit(1);
  }
})();
