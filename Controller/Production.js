const db = require('../config/db.config');
const Production = require('../models/production');

// Create a new production
exports.createProduction = (req, res) => {
  const newProduction = new Production(req.body);
  let sql = 'INSERT INTO productions SET ?';
  db.query(sql, newProduction, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).json({ id: result.insertId, ...newProduction });
    }
  });
};

// Get all productions
exports.getAllProductions = (req, res) => {
  let sql = 'SELECT * FROM productions';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(results);
    }
  });
};

// Get a single production by ID
exports.getProductionById = (req, res) => {
  let sql = 'SELECT * FROM productions WHERE id_productions = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (result.length === 0) {
      res.status(404).send('Production not found');
    } else {
      res.json(result[0]);
    }
  });
};

// Update a production by ID
exports.updateProduction = (req, res) => {
  const updatedProduction = new Production(req.body);
  let sql = 'UPDATE productions SET ? WHERE id_productions = ?';
  db.query(sql, [updatedProduction, req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json({ message: 'Production updated', updatedProduction });
    }
  });
};

// Delete a production by ID
exports.deleteProduction = (req, res) => {
  let sql = 'DELETE FROM productions WHERE id_productions = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Production not found');
    } else {
      res.json({ message: 'Production deleted' });
    }
  });
};
