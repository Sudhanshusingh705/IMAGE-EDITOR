// import express
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const userRouter = require("./routers/userRouter");
const utilRouter = require("./routers/util");
const filterRouter = require("./routers/FilterRouter");

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
  })
);

//  middle ware
app.use("/user", userRouter);
app.use("/util", utilRouter);
app.use("/filter", filterRouter);

app.use(express.static("./static/uploads"));

//starting the server
app.listen(port, () => {
  console.log("server started");
});
