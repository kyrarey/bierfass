const db = require('./dbConnection');
const Product = require('../models/Product');
const Users = require('../models/Users');
const seedProducts = require('../../utils/seedProducts');
const seedUsers = require('../../utils/seedUsers');

const setupSeed = async () => {
  try {
    console.log('starting seed');
    const products = await Product.bulkCreate(seedProducts);
    const users = await Users.bulkCreate(seedUsers);
    console.log('seed succesfully');
    Promise.all([products, users]);
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
