// import express
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const userRouter = require("./routers/userRouter");
const ImageRouter = require("./routers/ImageRouter");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

//  middle ware
app.use("/user", userRouter);
app.use("/image", ImageRouter);


app.listen(port, () => {
  console.log("server started");
});
