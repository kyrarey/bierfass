const Sequelize = require('sequelize');

const db = new Sequelize('bierfass', null, null, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  //este puerto es distinto porque en mi computador corre en un puerto diferente postgrest. el de ustedes deberia ser 5232, creo
});

module.exports = db;
