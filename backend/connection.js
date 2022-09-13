const mongoose = require("mongoose");

const db = "IMAGEEDITOR";
const dbUrl = `mongodb+srv://SUDHANSHU:Sudh2002@cluster0.6wqffyv.mongodb.net/${db}?retryWrites=true&w=majority`;

//Asynchronous Function - returns promise
mongoose
  .connect(dbUrl)
  .then((result) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
