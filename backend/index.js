//importing express module
const express = require("express");
const userRouter = require("./Routes/userRouter");
const cors = require('cors');

//initializing express app
const app = express();
const port = 5000;

//for converting  json data to javascript
app.use(express.json());
app.use (cors({origin: ["http://localhost:3000"],})
);

//importing routes middlewere
app.use("/users", userRouter);

//route or end point
app.get("/", (req, res) => {
  res.send("response from express");
});

app.get("/home", (req, res) => {
  res.send("response from home ");
});

//starting  the server
app.listen(port, () => {
  console.log("Hacking Express server started...");
});
