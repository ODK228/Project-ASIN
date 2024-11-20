const db = require('../config/db.config');

const Department = function(department) {
  this.id_departments = department.id_departments;
  this.nom = department.nom;
  this.created_at = department.created_at;
};

module.exports = Department;
