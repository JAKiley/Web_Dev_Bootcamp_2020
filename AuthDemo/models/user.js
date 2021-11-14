// define required packages
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// define User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User Name cannot be blank"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be blank"],
  },
});

// Functions for User Schema

// find user and validate
userSchema.statics.findAndValidate = async function (username, password) {
  const foundUser = await this.findOne({ username });
  const isValid = await bcrypt.compare(password, foundUser.password);
  return isValid ? foundUser : false;
};

// hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// export makes it available to use outside of this
module.exports = mongoose.model("User", userSchema);
