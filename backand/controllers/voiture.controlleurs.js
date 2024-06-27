const Voiture = require("../models/voiture.js");
exports.creer = async (req, res) => {
  try {
    var voiture = new Voiture(req.body);
    var result = await voiture.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.afficherTout = async (req, res) => {
  try {
    var result = await Voiture.find().exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.afficherUn = async (req, res) => {
  try {
    var result = await Voiture.findById({ _id: req.params.voitureId }).exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.modifier = async (req, res) => {
  try {
    var ancvoiture = await Voiture.findById({
      _id: req.params.voitureId,
    }).exec();
    ancvoiture.Marque = req.body.Marque;
    ancvoiture.Couleur = req.body.Couleur;
    ancvoiture.image = req.body.image;
    ancvoiture.prix = req.body.prix;
    ancvoiture.etat = req.body.etat;

    var result = await ancvoiture.save();
    res.send(result);
  } catch (error) {
    res.status(400).send("impossible de modifier la base de données");
  }
};

exports.supprimer = async (req, res) => {
  try {
    var result = await Voiture.deleteOne({ _id: req.params.voitureId }).exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
