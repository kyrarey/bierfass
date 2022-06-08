const { DataTypes, Model } = require("sequelize");
const db = require("../config/dbConnection");
const User = require("./Users")
const Product = require("./Product")

class ReviewProduct extends Model {}

ReviewProduct.init({
    comment:{
        type: DataTypes.STRING
    },
    rating:{
        type: DataTypes.INTEGER
    },
    
},{
    sequelize:db,
    modelName: 'reviewProduct'
})

User.hasMany(ReviewProduct)
Product.hasMany(ReviewProduct)

module.exports= ReviewProduct