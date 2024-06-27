const voit = require("../controllers/voiture.controlleurs");

module.exports = (app) => {
  // afficher tous les livres
  app.get("/voitures", voit.afficherTout);
  // créer un livre
  app.post("/voitures", voit.creer);
  // afficher un livre de Id donné
  app.get("/voitures/:voitureId", voit.afficherUn);
  // modifier un livre
  app.put("/voitures/:voitureId", voit.modifier);
  // supprimer un livre
  app.delete("/voitures/:voitureId", voit.supprimer);
};
