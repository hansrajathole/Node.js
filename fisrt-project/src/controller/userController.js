const User = require("../models/userModel");

const createUserForm = (req, res) => {
  res.render("create", { title: "Create User" });
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.render("home", { users, title: "Home" });
};

const getUserDetails = async (req, res) => {
  const id =  req.params.id;
  // console.log(id);
  const user = await User.findById(id);
  res.render("userDetails", { user, title: "User Detail" });
};

const createUser = async (req, res) => {
  await User.create(req.body);
  // const { username, profileImage, email, bio, gender , age} = req.body;
  // const user = new User({
  //   username : username,
  //   profileImage : profileImage,
  //   email: email,
  //   bio: bio,
  //   gender:gender,
  //   age: age,
  // });
  // await user.save();
  res.redirect("/");
};

module.exports = {
  createUserForm,
  getAllUsers,
  getUserDetails,
  createUser,
};
