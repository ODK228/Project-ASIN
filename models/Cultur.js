const Sequelize = require('sequelize');
const db = require('../Config/dbconfig');

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: 'mysql',
});

const Cultur = sequelize.define('cultur', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nom: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Cultur;
