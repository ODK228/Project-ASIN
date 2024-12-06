const db = require('../Config/dbconfig');
const Culture = require('../models/Culture');

// Create a new culture
exports.createCulture = (req, res) => {
  const newCulture = new Culture(req.body);
  let sql = 'INSERT INTO cultures SET ?';
  db.query(sql, newCulture, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).json({ id: result.insertId, ...newCulture });
    }
  });
};

// Get all cultures
exports.getAllCultures = (req, res) => {
  let sql = 'SELECT * FROM cultures';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(results);
    }
  });
};

// Get a single culture by ID
exports.getCultureById = (req, res) => {
  let sql = 'SELECT * FROM cultures WHERE id_cultures = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (result.length === 0) {
      res.status(404).send('Culture not found');
    } else {
      res.json(result[0]);
    }
  });
};

// Update a culture by ID
exports.updateCulture = (req, res) => {
  const updatedCulture = new Culture(req.body);
  let sql = 'UPDATE cultures SET ? WHERE id_cultures = ?';
  db.query(sql, [updatedCulture, req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json({ message: 'Culture updated', updatedCulture });
    }
  });
};

// Delete a culture by ID
exports.deleteCulture = (req, res) => {
  let sql = 'DELETE FROM cultures WHERE id_cultures = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Culture not found');
    } else {
      res.json({ message: 'Culture deleted' });
    }
  });
};


