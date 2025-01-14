const express = require("express");
const  app = express()
const indexRoutes = require("./routes/index.routes")
const userRoutes = require("./routes/users.routes")
// const controller = require("./controllers/index.controller")
// const userController = require("./controllers/user.controller")


app.use("/",indexRoutes);
app.use("/users",userRoutes)

// app.get("/",controller.indexController)
// app.get("/about",controller.aboutController)
// app.get("/users/profile",userController.getProfileController)

module.exports = app