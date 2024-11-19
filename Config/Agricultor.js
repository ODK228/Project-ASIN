const Agriculteur = require('../models/agriculteur.model');

exports.create = (req, res) => {
  if (!req.body.nom || !req.body.prenom) {
    return res.status(400).send({
      message: "Le contenu ne peut pas être vide!"
    });
  }

  const agriculteur = {
    nom: req.body.nom,
    prenom: req.body.prenom
  };

  Agriculteur.create(agriculteur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la création de l'agriculteur."
      });
    });
};

exports.findAll = (req, res) => {
  Agriculteur.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération des agriculteurs."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Agriculteur.findByPk(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Aucun agriculteur trouvé avec l'ID ${id}.`
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Une erreur s'est produite lors de la récupération de l'agriculteur avec l'ID ${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Agriculteur.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "L'agriculteur a été mis à jour avec succès."
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour l'agriculteur avec l'ID ${id}. Peut-être que l'agriculteur n'a pas été trouvé ou que le corps de la requête est vide!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Une erreur s'est produite lors de la mise à jour de l'agriculteur avec l'ID ${id}.`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Agriculteur.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "L'agriculteur a été supprimé avec succès."
        });
      } else {
        res.send({
          message: `Impossible de supprimer l'agriculteur avec l'ID ${id}. Peut-être que l'agriculteur n'a pas été trouvé!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Une erreur s'est produite lors de la suppression de l'agriculteur avec l'ID ${id}.`
      });
    });
};
