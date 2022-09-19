// import express
const express = require("express");
const userRouter = require("./routers/userRouter");
const ImageRouter = require("./routers/ImageRouter");

// intializing express
const { createServer } = require("http");
const { Server } = require("socket.io");

const cors = require("cors");

//  assign express in app and port 5000
const app = express();
const port = 5000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

//  converting json to js
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

//  middle ware
app.use("/user", userRouter);
app.use("/room", ImageRouter);

io.on("connection", (socket) => {
  console.log("socket connected");

  socket.on("sendmsg", (data) => {
    console.log(data);

    data.sent = false;
    socket.to(data.Image).emit("recmsg", data);
  });

  socket.on("joinroom", (Image) => {
    console.log(Image);
    socket.join(Image);
  });
});

// endpoint
app.get("/", (req, res) => {
  res.send("response from express");
});

httpServer.listen(port, () => {
  console.log("server started");
});
