const { Schema, model, Types } = require("../connection");

const myschema = new Schema({
  name: String,
  image: String,
  createdBy: { type: Types.ObjectId, ref: "" },
  createdAt: Date,
});

module.exports = model("filters", myschema);
