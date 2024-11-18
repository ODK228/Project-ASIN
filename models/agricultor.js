const db = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: 'mysql',
});

const Agriculteur = sequelize.define('agriculteur', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  nom: { type: Sequelize.STRING, allowNull: false },
  prenom: { type: Sequelize.STRING, allowNull: false }
});

module.exports = Agriculteur;
