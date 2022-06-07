const { DataTypes, Model } = require("sequelize");
const db = require("../config/dbConnection");
const ShoppingCar = require("./ShoppingCar")


class History extends Model {}

History.init({
    data:{
        type: DataTypes.DATE
    }
},{
    sequelize:db,
    modelName: 'history'
})

ShoppingCar.hasOne(History)

module.exports = Address