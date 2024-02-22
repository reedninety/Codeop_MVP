var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

  //GET event result(s)
  router.get("/events", function (req, res) {

    db("SELECT * FROM events ORDER BY id ASC;")
    .then(results => {
        res.send(results.data);
        console.log(results.data);
      })
      .catch(err => res.status(500).send(err));
  });


module.exports = router;
