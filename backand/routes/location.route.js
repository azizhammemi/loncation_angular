const express = require('express');
const router = express.Router();
const {
  getAllloc,
  createloc,
  getLocById
} = require("../controllers/location.controlleurs.js");

 
router.post('/', async (req, res) => {
  try {
    const newUser = await createloc(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve all users
router.get('/', async (req, res) => {
  try {
    const users = await getAllloc();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const locationId = req.params.id;
    const location = await getLocById(locationId);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
  module.exports = router;


