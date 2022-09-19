const { Schema, model } = require("../connection");

//Here we are defining the structure of model
const myschema = new Schema({
  username: String,
  email: String,
  password: String,
  repeatpassword: String
});

//starting the server
module.exports = model("users", Imageschema);
