const cultur = require('../models/Cultur');

exports.create = (req, res) => {
  if (!req.body.nom) {
    return res.status(400).send({
      message: "Le nom de la culture ne peut pas être vide !"
    });
  }

  const cultur = {
    nom: req.body.nom
  };

  cultur.create(cultur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la création de la culture."
      });
    });
};

exports.findAll = (req, res) => {
  cultur.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération des cultures."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  cultur.findByPk(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Aucune cultur trouvée avec l'ID ${id}.`
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Une erreur s'est produite lors de la récupération de la culture avec l'ID ${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  cultur.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "La cultur a été mise à jour avec succès."
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour la culture avec l'ID ${id}. Peut-être que la culture n'a pas été trouvée ou que le corps de la requête est vide !`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Une erreur s'est produite lors de la mise à jour de la culture avec l'ID ${id}.`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  cultur.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "La culture a été supprimée avec succès."
        });
      } else {
        res.send({
          message: `Impossible de supprimer la culture avec l'ID ${id}. Peut-être que la culture n'a pas été trouvée !`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Une erreur s'est produite lors de la suppression de la culture avec l'ID ${id}.`
      });
    });
};
