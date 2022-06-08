const { DataTypes, Model } = require("sequelize");
const Product = require("./Product")
const db = require("../config/dbConnection");
const User = require("./Users")



class ShoppingCar extends Model {}

ShoppingCar.init({
    quantity:{
        type: DataTypes.INTEGER
    },
    finalPrice:{
        type: DataTypes.INTEGER
    }
},{
    sequelize:db,
    modelName: 'shoppingCar'
});


User.hasOne(ShoppingCar)



module.exports = ShoppingCar
