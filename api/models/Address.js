const { DataTypes, Model } = require("sequelize");
const db = require("../config/dbConnection");
const User = require("./Users");


class Address extends Model {}

Address.init({
    city:{
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.STRING
    },
    street:{
        type: DataTypes.STRING
    },
    countryCode:{
        type: DataTypes.INTEGER
    },
    telephone:{
        type: DataTypes.INTEGER
    },
    postalCode:{
        type: DataTypes.INTEGER
    }
},{
    sequelize:db,
    modelName: 'address'
})

User.hasMany(Address)

module.exports = Address

