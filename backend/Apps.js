const express = require("express");
const mongoose = require("mongoose");
//const nodeMail = require("nodemailer");
//const path = require("path");
const Sendmail = require("./send/sendmail");
const cors = require("cors");
const app = express();

let port = 5000;

app.use(express.json()); // parses incoming api request with json payloads- middleware
const corsOptions = {
  origin: "*",
  Credential: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin1:admin@cluster0.ru3opcr.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8000, () => {
  connect();
  console.log("server listen on port 8000");
  console.log("Connected to backend.");
});
// app.get("/", (req, res) => {
//   res.send("It running");
// });
app.use(function (req, res, next) {
  console.log("api: " + req.originalUrl);
  next();
});
app.post("/sendmail", Sendmail);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log("i am live on port " + port);
    });
  } catch (error) {}
};

start();
