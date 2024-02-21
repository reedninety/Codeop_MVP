var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get("/", function (req, res) {
    res.send({ title: "Express" });
  });

  //GET hobbies Categories page
  router.get("/hobbies", function (req, res, next) {
    db("SELECT * FROM hobbies ORDER BY id ASC;")
    .then(results => {
        res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
  });

  //GEt event result(s)
  router.get("/events", function (req, res) {
    db("SELECT * FROM events ORDER BY id ASC;")
    .then(results => {
        res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
  });

  //POST create new event

  //POST create new user

module.exports = router;
