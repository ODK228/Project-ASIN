const Area = require('../models/area');

exports.create = (req, res) => {
  if (!req.body.agriculteur_id || !req.body.culture_id || !req.body.departement_id || !req.body.superficieTotale || !req.body.superficieExploitee || !req.body.benefice) {
    return res.status(400).send({
      message: "Le contenu ne peut pas être vide!"
    });
  }

  const area = {
    agriculteur_id: req.body.agriculteur_id,
    culture_id: req.body.culture_id,
    departement_id: req.body.departement_id,
    superficieTotale: req.body.superficieTotale,
    superficieExploitee: req.body.superficieExploitee,
    benefice: req.body.benefice
  };

  Area.create(area)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la création de l'area."
      });
    });
};

exports.findAll = (req, res) => {
  Area.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération des areas."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Area.findByPk(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Aucune area trouvée avec l'ID ${id}.`
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Une erreur s'est produite lors de la récupération de l'area avec l'ID ${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Area.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "L'area a été mise à jour avec succès."
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour l'area avec l'ID ${id}. Peut-être que l'area n'a pas été trouvée ou que le corps de la requête est vide!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Une erreur s'est produite lors de la mise à jour de l'area avec l'ID ${id}.`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Area.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "L'area a été supprimée avec succès."
        });
      } else {
        res.send({
          message: `Impossible de supprimer l'area avec l'ID ${id}. Peut-être que l'area n'a pas été trouvée!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Une erreur s'est produite lors de la suppression de l'area avec l'ID ${id}.`
      });
    });
};
