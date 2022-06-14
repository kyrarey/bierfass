const { DataTypes, Model } = require("sequelize");
const db = require("../config/dbConnection");
const User = require("./Users");


class History extends Model {}

History.init({
    data:{
        type: DataTypes.DATE
    }
},{
    sequelize:db,
    modelName: 'history'
})

History.belongsTo(User)

module.exports = History