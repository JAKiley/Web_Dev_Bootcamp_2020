// define required packages
const express = require("express");
const app = express();
const User = require("./models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");

// open Mongoose connection
mongoose
  .connect("mongodb://localhost:27017/authDemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "notagoodsecret" }));

// generic function to require login
const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  next();
};
// Home page route
app.get("/", (req, res) => {
  res.send("THIS IS THE HOME PAGE");
});
// register route
app.get("/register", (req, res) => {
  res.render("register");
});
// Register user
app.post("/register", async (req, res) => {
  const { password, username } = req.body;
  const user = new User({ username, password });
  await user.save();
  req.session.user_id = user._id;
  res.redirect("/");
});
// login route
app.get("/login", (req, res) => {
  res.render("login");
});
// Login User - findAndValidate is in User model
app.post("/login", async (req, res) => {
  const { password, username } = req.body;
  const foundUser = await User.findAndValidate(username, password);
  if (foundUser) {
    req.session.user_id = foundUser._id;
    res.redirect("/secret");
  } else {
    res.redirect("/login");
  }
});
// Log out - clear user name from cookies
app.post("/logout", (req, res) => {
  req.session.user_id = null;
  res.redirect("/login");
});
// User Logged in under secret route
app.get("/secret", requireLogin, (req, res) => {
  res.render("secret");
});
// User logged in under Top Secret route
app.get("/topsecret", requireLogin, (req, res) => {
  res.send("TOP SECRET");
});

app.listen(3000, () => {
  console.log("SERVING YOUR APP");
});

// To Display DB
// Go to Mongo Monitor
// show dbs
// use authDemo
// show collections
// db.user.find()
