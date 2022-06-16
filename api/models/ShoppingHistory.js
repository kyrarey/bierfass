const { DataTypes, Model } = require("sequelize");
const db = require("../config/dbConnection");
const User = require("./Users");
const OrderDetail = require("./OrderDetail")


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
    },
    finalPrice:{
        type: DataTypes.INTEGER
    }
},{
    sequelize:db,
    modelName: 'shoppingHistory'
})

ShoppingHistory.belongsTo(User)


OrderDetail.belongsTo(ShoppingHistory)

module.exports = ShoppingHistory