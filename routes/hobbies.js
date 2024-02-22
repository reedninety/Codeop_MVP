var express = require('express');
var router = express.Router();
const db = require("../model/helper");



router.get("/", function (req, res, next) {
  db("SELECT * FROM hobbies ORDER BY id ASC;")
  .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});



module.exports = router;
