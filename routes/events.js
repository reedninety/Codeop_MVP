var express = require("express");
var router = express.Router();
const Sequelize = require("sequelize");
// const db = require("../model/helper");

const models = require("../models");

//get all events
router.get("/", async function (req, res, next) {
  try {
    const events = await models.Event.findAll();
    res.send(events);
  }catch (error) {
    res.status(500).send(error);
  }
});

//post new event
router.post("/", async function (req, res, next){
  const { eventName, 
    eventPrice, 
    eventLocation, 
    eventDescription, 
    eventTime, 
    eventDate, 
    skillLevel,
    CategoryId, 
    equipNeeded }
     = req.body; 
  try {
    const event = await models.Event.create({ 
      eventName, 
      eventPrice, 
      eventLocation, 
      eventDescription, 
      eventTime, 
      eventDate, 
      skillLevel, 
      CategoryId,
      equipNeeded })
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all events by a certain Category ID 
router.get("/category/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const response = await models.Event.findAll({
      where: { CategoryId: id },
    });

    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all information from one service by ID - working 18/03
router.get("/details/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const response = await models.Event.findOne({
      where: { id: id },
    });

    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

//delete event - not yet tested
router.delete("/deleted", async function (req, res) {
  try {
    const { event } = req.query;
    const response = await models.Event.destroy({
      where: { id: event}
    });
    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
})

module.exports = router;
