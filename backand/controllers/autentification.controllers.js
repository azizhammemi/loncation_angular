var User = require("../models/user.js");
var client = require("../models/client.js");
var Admin = require("../models/Admin.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

var { ROLE, PASSWRD_REGEX, EMAIL_REGEX } = require("../Config/handler.config.js");
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not defined' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Create token
    const payload = { userId: user._id };
    const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ success: true, token, message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.register = async (req, res) => {
  const {
    email,
    password,
    adresse,
    telephone,
    nomAdmin,
    nom,
    prenom,
  } = req.body;
  //simple validation
  const { role } = req.params;
  if (!ROLE.includes(role)) {
    return res.status(400).json({ msg: "role non valide!" });
  }
  if (!email || !password) {
    return res.status(400).json({ msg: "Email or password non saisies" });
  }
  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ erreur: "Email non valide" });
  }
  if (!PASSWRD_REGEX.test(password)) {
    return res.status(400).json({ erreur: "password non valide" });
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({
      email,
      password: hash,
      role,
      adresse,
      telephone,
    });
    switch (role) {
      case "Admin":
        await Admin.create({
          nomAdmin,
          userId: user._id,
        });

        break;
      case "Client":
        await client.create({
          nom,
          prenom,
          userId: user._id,
        });
        break;
      default:
        break;
    }
    return res.status(201).json({ message: "user crée" });
  } catch (erreur) {
    return res.status(500).json({ erreur });
  }
};
exports.logout = async (req, res) => {
  try {
    // Envoyer une réponse de succès
    res.status(200).json({ message: "Déconnexion réussie" });
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
    res.status(500).json({ message: "Erreur lors de la déconnexion" });
  }
};
