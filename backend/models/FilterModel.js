const { Schema, model } = require("../connection");

const myschema = new Schema({
  name: String,
  image: String,
  createdBy: String,
  createdAt: Date,
});

module.exports = model("filter", myschema);
