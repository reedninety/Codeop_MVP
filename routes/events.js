var express = require("express");
var router = express.Router();
const db = require("../model/helper");

    //GET all event results
    router.get("/", async function (req, res, next) {
      try {
        const {
          event_location,
          event_date,
          event_time,
          event_enviro,
          event_crowd,
          skill_level,
          equip_needed,
          hobby_id,
        } = req.query;
    
        // generate a dynamic query based on the query string (if the fields are present)
        let query = `SELECT * FROM events WHERE 1=1`;
        if (event_location) query += ` AND event_location LIKE "%${event_location}%"`;
        if (event_date) query += ` AND event_date = "${event_date}"`;
        if (event_time) query += ` AND event_time = "${event_time}"`;
        if (event_enviro) query += ` AND event_enviro = "${event_enviro}"`;
        if (event_crowd) query += ` AND event_crowd = "${event_crowd}"`;
        if (skill_level) query += ` AND skill_level = "${skill_level}"`;
        if (equip_needed) query += ` AND equip_needed = "${equip_needed}"`;
        if (hobby_id) query += ` AND hobby_id = ${hobby_id}`;
    
        const searchResult = await db(query);
        //want to add price in BETWEEN once i've sorted the form out
        res.send(searchResult.data);
      } catch (err) {
        res.status(500).send(err);
      }
    });
  //POST create new event
  router.post("/", async function(req, res) {
    try{
        const { event_name,
            event_location,
            event_description,
            skill_level,
            hobby_id,
            equip_needed,
           } = req.body;
            await db(
              `INSERT INTO events (event_name, event_location, event_description, skill_level, hobby_id) VALUES ("${event_name}", "${event_location}", "${event_description}", "${skill_level}", ${hobby_id}), ${equip_needed};`
              );
    res.status(201).send({ message: "Event was inserted" });
} catch (err) {
  res.status(500).send(err);
  }
});

module.exports = router;
