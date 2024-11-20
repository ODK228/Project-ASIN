const db = require('../Config/dbconfig');

const Production = function(production) {
  this.id_productions = production.id_productions;
  this.id_users = production.id_users;
  this.id_departments = production.id_departments;
  this.id_cultures = production.id_cultures;
  this.superficie = production.superficie;
  this.created_at = production.created_at;
};

module.exports = Production;
