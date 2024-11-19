const db = require('../Config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: 'mysql',
});

const Agricultor = sequelize.define('agricultor', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  nom: { type: Sequelize.STRING, allowNull: false },
  prenom: { type: Sequelize.STRING, allowNull: false }
});

module.exports = Agricultor;
