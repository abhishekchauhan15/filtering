const express = require("express");
const router = express.Router();
const data = require("../data");
const navData = require("../catogeries");

router.get("/", (req, res) => {
  res.send("Hello World from router.js file");
});

//conneting with db
require("../database/connection");
// const User = require("../model/userSchema");


router.get("/api/data", (req, res) => {
  res.json(data);
 
})


router.get("/api/catogeries", (req, res) => {
  res.json(navData);
 
})

module.exports = router;
