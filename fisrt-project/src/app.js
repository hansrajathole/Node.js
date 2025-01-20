
const express = require("express");
const path = require("path");
const userRoutes = require("./routes/user");
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, "../public"))); // serve static files
app.set("view engine", "ejs"); // Set view engine
app.set("views", path.join(__dirname, "views")); // Set views path


// Routes setup
app.use("/", userRoutes);

// Error handling (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
