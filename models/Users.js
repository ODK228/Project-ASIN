

const User = function(user) {
  this.id_users = user.id_users;
  this.nom = user.nom;
  this.prenoms = user.prenoms;
  this.email = user.email;
  this.numero = user.numero;
  this.password = user.password;
  this.id_typeUsers = user.id_typeUsers;
  this.created = user.created;
};

module.exports = User;
