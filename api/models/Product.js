const { DataTypes, Model } = require('sequelize');
const db = require('../config/dbConnection');


class Product extends Model {}

Product.init(
  {
    //esta no es al relacion con admin o no?
    id:{ 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
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



module.exports = Product;
