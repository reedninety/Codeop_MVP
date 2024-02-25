var express = require('express');
var router = express.Router();
const db = require("../model/helper");



  // //GET event result(s)
  // const allEvents = router.get("/", function (req, res) {
  //   db("SELECT * FROM events ORDER BY id ASC;")
  //   .then(results => {
  //       res.send(results.data);
  //     })
  //     .catch(err => res.status(500).send(err));
  // });

    //GET all event results
   router.get("/", async function (req, res) {
    try{
       const allEvents = await db("SELECT * FROM events ORDER BY id ASC;")
          res.send(allEvents.data);
      } catch (err) {res.status(500).send(err);
      }
    });

  //POST create new event
  router.post("/", async function(req, res) {
    try{
        const { event_name, event_price, event_location, event_description, event_date, event_time, event_enviro, event_crowd, skill_level, equip_needed } = req.body;
            await db(`INSERT INTO events (event_name, event_price, event_location, event_description, event_date, event_time, event_enviro, event_crowd, skill_level, equip_needed) VALUES ("${event_name}", "${event_price}", "${event_location}", "${event_description}", "${event_date}", ${event_time} "${event_enviro}", "${event_crowd}", "${skill_level}", "${equip_needed}")`);
    res.status(201).send({ message: "Event was inserted" });
} catch (err) {
  res.status(500).send(err);
  }
});

// GET specific event

router.get("/results", async function (req, res, next){
  try { 
    const {event_location, event_date, event_time, event_enviro, event_crowd, skill_level, equip_needed} = req.body;
    const searchResult = await db(`SELECT (event_name, event_description FROM events WHERE event_location = "${event_location}" AND event_date = '${event_date}' AND event_time = "${event_time}" AND event_enviro = ${event_enviro} AND event_crowd = "${event_crowd}"AND skill_level = "${skill_level}" AND equip_needed = ${equip_needed};`)
//want to add price in between once i've sorted the form out
res.send(searchResult.data);
  } catch (err) {res.status(500).send(err);
  }
});

module.exports = router;
