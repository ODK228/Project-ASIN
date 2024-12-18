const db = require('../Config/dbconfig');
const Department = require('../models/Departments');


// Fonction pour générer un ID unique de 5 caractères
function generateUniqueId(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Créer un nouveau département
exports.createDepartment = (req, res) => {
  const newDepartment = new Department(req.body);
  newDepartment.id_departements = generateUniqueId(5);
  newDepartment.created_at = new Date().toISOString().split("T")[0];
  let sql = 'INSERT INTO departements SET ?';
  db.query(sql, newDepartment, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).json({ id: result.insertId, ...newDepartment });
    }
  });
};

// Obtenir tous les départements
exports.getAllDepartments = (req, res) => {
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
exports.getDepartmentById = (req, res) => {
  let sql = 'SELECT * FROM departements WHERE id_departements = ?';
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
exports.updateDepartment = (req, res) => {
  const updatedDepartment = new Department(req.body);
  delete updatedDepartment.id_departements;  
  updatedDepartment.created_at = new Date().toISOString().split("T")[0];
  let sql = 'UPDATE departements SET ? WHERE id_departements = ?';
  db.query(sql, [updatedDepartment, req.params.id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json({ message: 'Department updated', updatedDepartment });
    }
  });
};

// Supprimer un département
exports.deleteDepartment = (req, res) => {
  let sql = 'DELETE FROM departements WHERE id_departements = ?';
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
