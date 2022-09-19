const { Schema, model } = require("../connection");

const chatschema = new Schema({
  username:String,
    email:String,
    password:String,
    createdAt: Date
});

module.exports = model("rooms", Imageschema);
