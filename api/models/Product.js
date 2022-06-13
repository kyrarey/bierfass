const { DataTypes, Model } = require('sequelize');
const db = require('../config/dbConnection');
const ShoppingCar = require('./ShoppingCar');

class Product extends Model {}

Product.init(
  {
    //esta no es al relacion con admin o no?
    idProductowner: {
      type: DataTypes.INTEGER,
    },
    //
    origin: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    //rating por stock
    type: {
      type: DataTypes.STRING,
    },
    alcoholPercentage: {
      type: DataTypes.INTEGER,
    },
    size: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'product',
  }
);

//esto no funciona como deberia, logica de carrito de compras

ShoppingCar.hasMany(Product);

module.exports = Product;
