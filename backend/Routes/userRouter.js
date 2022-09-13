const express = require("express");
const router = express.Router();
const model = require("../models/userModel");

router.post("/add", (req, res) => {
  console.log(req.body);
  // res.send('Response from user Router');

  //Add operation
  new model(req.body)
    .save() //save is promise
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/getall", (req, res) => {
  model
    .find()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// ':' colon denotes url parametar
router.get("/getbyusername/:username", (req, res) => {
  console.log(req.params.username);
  model
    .find({ username: req.params.username })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  model
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.put("/update/:id", (req, res) => {
  Model
  .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//Exporting  routes
module.exports = router;
