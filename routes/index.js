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

//   //GET event result(s)
//   router.get("/events", function (req, res) {
//     db("SELECT * FROM events ORDER BY id ASC;")
//     .then(results => {
//         res.send(results.data);
//       })
//       .catch(err => res.status(500).send(err));
//   });

  //POST create new event
  router.post("/events", async function(req, res) {
    try{
        const { event_name, event_price, event_location, event_description, event_schedule, event_enviro, event_crowd, skill_level, equip_needed } = req.body;
            await db(`INSERT INTO events (event_name, event_price, event_location, event_description, event_schedule, event_enviro, event_crowd, skill_level, equip_needed) VALUES ("${event_name}", "${event_price}", "${event_location}", "${event_description}", "${event_schedule}", "${event_enviro}", "${event_crowd}", "${skill_level}", "${equip_needed}")`);
    res.status(201).send({ message: "Event was inserted" });
} catch (err) {
  res.status(500).send(err);
  }
});

  //POST create new user

module.exports = router;
