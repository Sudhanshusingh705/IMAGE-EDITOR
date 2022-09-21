const multer = require("multer");
const router = require("express").Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  console.log(req.file.filename);
  res
    .status(200)
    .json({
      status: "success",
      url: "http://localhost:5000/" + req.file.filename,
    });
});

module.exports = router;
