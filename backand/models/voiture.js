const mongoose = require("mongoose");
const VoitureSchema = mongoose.Schema({
  Marque: {
    type: String,
    required: "Marque is required",
  },
  Couleur: {
    type: String,
    required: "Couleur is required",
  },
  image: {
    type: String,
    required: "image is required",
  },
  prix: {
    type: String,
    required: "prix is required",
  },
  etat: {
    type: String,
    required: "etat is required",
  },
 
});
module.exports = mongoose.model("voiture", VoitureSchema);
