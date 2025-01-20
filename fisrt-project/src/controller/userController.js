const User = require("../models/userModel");

const createUserForm = (req, res) => {
  res.render("create", { title: "Create User" });
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.render("home", { users, title: "Home" });
};

const getUserDetails = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("userDetails", { user, title: "User Detail" });
};

const createUser = async (req, res) => {
  await User.create(req.body);
  res.redirect("/");
};

module.exports = {
  createUserForm,
  getAllUsers,
  getUserDetails,
  createUser,
};
