const db = require('../Config/dbconfig');
const Departement = require('../models/Departments');

// Créer un nouveau département
exports.createDepartement = (req, res) => {
  const newDepartement = new Departement(req.body);
  let sql = 'INSERT INTO departements SET ?';
  db.query(sql, newDepartement, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).json({ id: result.insertId, ...newDepartment });
    }
  });
};

// Obtenir tous les départements
exports.getAllDepartements = (req, res) => {
  let sql = 'SELECT * FROM departements';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(results);
    }
  });
};

// Obtenir un département par son ID
exports.getDepartementById = (req, res) => {
  let sql = 'SELECT * FROM departements WHERE id_departments = ?';
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

// Mettre à jour un département
exports.updateDepartement = (req, res) => {
  const updatedDepartement = new Departement(req.body);
  let sql = 'UPDATE departements SET ? WHERE id_departments = ?';
  db.query(sql, [updatedDepartement, req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json({ message: 'Department updated', updatedDepartement });
    }
  });
};

// Supprimer un département
exports.deleteDepartement = (req, res) => {
  let sql = 'DELETE FROM departements WHERE id_departments = ?';
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
