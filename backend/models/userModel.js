const { Schema, model } = require("../connection");

const myschema = new Schema({
  username: String,
  email: String,
  password: String,
  repeatpassword: String
});

module.exports = model("users",myschema);
