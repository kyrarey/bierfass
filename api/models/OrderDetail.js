const { DataTypes, Model } = require("sequelize");
const db = require("../config/dbConnection");
const Product = require("./Product");
const ShoppingHistory = require("./ShoppingHistory");
const User = require("./Users");

class OrderDetail extends Model {}

OrderDetail.init({
    quantity:{
        type: DataTypes.STRING
    },
    total:{
        type: DataTypes.STRING
    },
},{
    sequelize:db,
    modelName: 'orderDetail'
})

OrderDetail.belongsTo(ShoppingHistory)
OrderDetail.belongsTo(User)

OrderDetail.belongsTo(Product)


module.exports = ShoppingHistory