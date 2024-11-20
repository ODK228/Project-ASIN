const db = require('../config/db.config');
const TypeUser = require('../models/Type_users');

// Create a new type user
exports.createTypeUser = (req, res) => {
  const newTypeUser = new TypeUser(req.body);
  let sql = 'INSERT INTO type_users SET ?';
  db.query(sql, newTypeUser, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).json({ id: result.insertId, ...newTypeUser });
    }
  });
};

// Get all type users
exports.getAllTypeUsers = (req, res) => {
  let sql = 'SELECT * FROM type_users';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(results);
    }
  });
};

// Get a single type user by ID
exports.getTypeUserById = (req, res) => {
  let sql = 'SELECT * FROM type_users WHERE id_typeUsers = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (result.length === 0) {
      res.status(404).send('Type user not found');
    } else {
      res.json(result[0]);
    }
  });
};

// Update a type user by ID
exports.updateTypeUser = (req, res) => {
  const updatedTypeUser = new TypeUser(req.body);
  let sql = 'UPDATE type_users SET ? WHERE id_typeUsers = ?';
  db.query(sql, [updatedTypeUser, req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json({ message: 'Type user updated', updatedTypeUser });
    }
  });
};

// Delete a type user by ID
exports.deleteTypeUser = (req, res) => {
  let sql = 'DELETE FROM type_users WHERE id_typeUsers = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Type user not found');
    } else {
      res.json({ message: 'Type user deleted' });
    }
  });
};
