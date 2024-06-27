const mongoose = require("mongoose");
const LocationSchema = mongoose.Schema({
  dateDebut: {
    type: String,
    required: "dateDebut is required",
  },
  dateFin: {
    type: String,
    required: "dateFin is required",
  },
  nom: {
    type: String,
    required: "nom is required",
  },
  image: {
    type: String,
    required: "image is required",
  },
  nomcar: {
    type: String,
    required: "nomcar is required",
  },
  numero: {
    type: String,
    required: "numero is required",
  }
});
module.exports = mongoose.model("location", LocationSchema);
