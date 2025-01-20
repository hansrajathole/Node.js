// src/routes/user.js
const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");


router.get("/users/create", userController.createUserForm); // Show create user form
router.get("/users/:id", userController.getUserDetails); // User detail page
router.get("/", userController.getAllUsers); // Home page (all users)
router.post("/users", userController.createUser); 
module.exports = router;
