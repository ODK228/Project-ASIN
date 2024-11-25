const db = require('../Config/dbconfig');
const User = require('../models/Users');

// Create a new user
exports.createUser = (req, res) => {
  const newUser = {
    id_users: req.body.id_users,
    nom: req.body.nom,
    prenoms: req.body.prenoms,
    email: req.body.email,
    numero: req.body.numero,
    password: req.body.password,
    id_typeUsers: req.body.id_typeUsers,
    created: req.body.created
  };
  let sql = 'INSERT INTO users SET ?';
  db.query(sql, newUser, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).json({ id: result.insertId, ...newUser });
    }
  });
};

// Get all users
exports.getAllUsers = (req, res) => {
  let sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(results);
    }
  });
};

// Get a single user by ID
exports.getUserById = (req, res) => {
  let sql = 'SELECT * FROM users WHERE id_users = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (result.length === 0) {
      res.status(404).send('User not found');
    } else {
      res.json(result[0]);
    }
  });
};

// Update a user by ID
exports.updateUser = (req, res) => {
  const updatedUser = {
    nom: req.body.nom,
    prenoms: req.body.prenoms,
    email: req.body.email,
    numero: req.body.numero,
    password: req.body.password,
    id_typeUsers: req.body.id_typeUsers,
    created: req.body.created
  };
  let sql = 'UPDATE users SET ? WHERE id_users = ?';
  db.query(sql, [updatedUser, req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json({ message: 'User updated', updatedUser });
    }
  });
};

// Delete a user by ID
exports.deleteUser = (req, res) => {
  let sql = 'DELETE FROM users WHERE id_users = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (result.affectedRows === 0) {
      res.status(404).send('User not found');
    } else {
      res.json({ message: 'User deleted' });
    }
  });
};
