const Location = require("../models/location.js");


const createloc = async (userData) => {
  try {
    const user = new Location(userData);
    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
};

// Retrieve all users
const getAllloc = async () => {
  try {
    const users = await Location.find();
    return users;
  } catch (error) {
    throw error;
  }
};
const getLocById = async (locationId) => {
  try {
    const location = await Location.findById(locationId);
    return location;
  } catch (error) {
    throw error;
  }
};
module.exports = { createloc, getAllloc ,getLocById};
