const db = require('../config/db.config');
const Department = require('../models/Departments');

// Create a new department
exports.createDepartment = (req, res) => {
  const newDepartment = new Department(req.body);
  let sql = 'INSERT INTO departments SET ?';
  db.query(sql, newDepartment, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).json({ id: result.insertId, ...newDepartment });
    }
  });
};

// Get all departments
exports.getAllDepartments = (req, res) => {
  let sql = 'SELECT * FROM departments';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(results);
    }
  });
};

// Get a single department by ID
exports.getDepartmentById = (req, res) => {
  let sql = 'SELECT * FROM departments WHERE id_departments = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (result.length === 0) {
      res.status(404).send('Department not found');
    } else {
      res.json(result[0]);
    }
  });
};

// Update a department by ID
exports.updateDepartment = (req, res) => {
  const updatedDepartment = new Department(req.body);
  let sql = 'UPDATE departments SET ? WHERE id_departments = ?';
  db.query(sql, [updatedDepartment, req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json({ message: 'Department updated', updatedDepartment });
    }
  });
};

// Delete a department by ID
exports.deleteDepartment = (req, res) => {
  let sql = 'DELETE FROM departments WHERE id_departments = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Department not found');
    } else {
      res.json({ message: 'Department deleted' });
    }
  });
};

