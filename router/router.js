const express = require("express");
const router = express.Router();
const data = require("../data");

router.get("/", (req, res) => {
  res.send("Hello World from router.js file");
});

//conneting with db
require("../database/connection");
// const User = require("../model/userSchema");


router.get("/api/data", (req, res) => {
  res.json(data);
 
})

module.exports = router;
