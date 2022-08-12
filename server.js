const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// const cookieParser = require('cookie-parser')

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 8000;

require("./database/connection");
// const User =require('./model/userSchema');

app.use(express.json());
//linking the router files
app.use(require("./router/router"));

// app.use(cookieParser())

app.get("/contact", (req, res) => {
  res.send(`Hello Contact world from the server`);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// JSON.stringify(data) ->to convert object to json string
// JSON.parse(data) ->to convert json to object
