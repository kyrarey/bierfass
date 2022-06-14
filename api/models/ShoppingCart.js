const { DataTypes, Model } = require("sequelize");
const Product = require("./Product")
const db = require("../config/dbConnection");
const User = require("./Users")



class ShoppingCart extends Model {}

ShoppingCart.init({
    quantity:{
        type: DataTypes.INTEGER
    },
    price:{
        type: DataTypes.INTEGER
    }
},{
    sequelize:db,
    modelName: 'shoppingCart'
});


ShoppingCart.belongsTo(User);
ShoppingCart.belongsTo(Product);

module.exports = ShoppingCart
