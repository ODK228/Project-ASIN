const db = require('../Config/dbconfig');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: 'mysql',
});

const Area = sequelize.define('area', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  agricultor_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'agricultors', 
      key: 'id'
    }
  },
  cultur_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'culturs',
      key: 'id'
    }
  },
  departement_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'departements',
      key: 'id'
    }
  },
  total_area: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  used_area: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  gain: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Area;
