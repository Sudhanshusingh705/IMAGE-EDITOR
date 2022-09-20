const { Schema, model } = require("../connection");

const imageSchema = new Schema({
    username:String,
    email:String,
    password:String,
    createdAt: Date
});

module.exports = model("image", imageSchema);
