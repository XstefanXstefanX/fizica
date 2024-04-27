const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const exp = require("constants");

const app = express();
// use EJS as the view engine
app.set("view engine", "ejs");
// static file
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on Port: ${port}`);
});
