const Sequelize = require('sequelize');

const db = new Sequelize('bierfass', null, null, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
<<<<<<< HEAD
  port: 5432
=======
  port: 5432,
>>>>>>> f83adae23d3e1e28f0746c7fe9c6d9641f361d0d
  //este puerto es distinto porque en mi computador corre en un puerto diferente postgrest. el de ustedes deberia ser 5432, creo
});

module.exports = db;
