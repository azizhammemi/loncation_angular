const mongoose = require("mongoose");
const AdminSchema = mongoose.Schema({
  nomAdmin: {
    type: String,
    required: "nom is required",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("Admin", AdminSchema);
