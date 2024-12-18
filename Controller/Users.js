const db = require('../Config/dbconfig');
const User = require('../models/Users');


// Ceci c"est pour le GetPassword
exports.getUserPassword = (req, res) => {
  let sql = 'SELECT password FROM users WHERE email = ?';
  db.query(sql, [req.body.email], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (result.length === 0) {
      res.status(404).send('User not found');
    } else {
      res.json(result[0].password);
    }
  });
};

// Create a new user

// exports.createUser = (req, res) => {
//   const newUser = new User(req.body);
//   let sql = 'INSERT INTO users SET ?';
//   db.query(sql, newUser, (err, result) => {
//     if (err) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(201).json({ id: result.insertId, ...newUser });
//     }


exports.createUser = (userData) => {
  return new Promise((resolve, reject) => {
    const newUser = new User(userData);
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, newUser, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve({ id: result.insertId, ...newUser });
      }
    });
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

// Get user ID by email
exports.getUserIdByEmail = (email) => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT id_users FROM users WHERE email = ?';
    db.query(sql, [email], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.length > 0 ? result[0].id_users : null);
      }
    });
  });
};

// Get user ID by ID
exports.getUserIdById = (userId) => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT id_users FROM users WHERE id_users = ?';
    db.query(sql, [userId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.length > 0 ? result[0].id_users : null);
      }
    });
  });
};

// Update a user by ID
exports.updateUser = (req, res) => {
  const updatedUser = new User(req.body);
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