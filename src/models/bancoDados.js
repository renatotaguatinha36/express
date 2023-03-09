

const Sequelize = require("sequelize");
const sequelize = new Sequelize('testdb', 'root', '', {
  host:  'localhost',
  dialect: 'mysql',
  
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pessoa = require("../models/pessoa")(sequelize, Sequelize);

module.exports = db;