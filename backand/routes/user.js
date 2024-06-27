// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUsers,
  updateUserById,
  deleteUserById
} = require('../controllers/users.controlleur.js');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve all users
router.get('/', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a user by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await updateUserById(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await deleteUserById(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
