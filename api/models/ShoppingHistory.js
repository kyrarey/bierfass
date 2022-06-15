const { DataTypes, Model } = require("sequelize");
const db = require("../config/dbConnection");
const User = require("./Users");


class ShoppingHistory extends Model {}

ShoppingHistory.init({
    selectedEmail:{
        type: DataTypes.STRING
    },
    address:{
        type: DataTypes.STRING
    },
    payMethod:{
        type: DataTypes.STRING
    }
},{
    sequelize:db,
    modelName: 'shoppingHistory'
})

ShoppingHistory.belongsTo(User)

module.exports = ShoppingHistory