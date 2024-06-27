const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("dotenv").config({ path: ".env" });
// connexion à la base de donnée
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/location", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connecté à la base de données MongoDB");
  })
  .catch((error) => {
    console.error("Erreur de connexion à la base de données MongoDB :", error);
  });
// appel aux routes

app.listen(5002, () => {
  console.log("Serveur port : 5002");
});
var loginRoutes = require("./routes/authentification");
var userRoutes = require('./routes/user.js');
var loca = require('./routes/location.route.js');


app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/auth", loginRoutes);
app.use("/api/userr", userRoutes);
app.use("/api/loction", loca);
require("./routes/voiture.route.js")(app);
