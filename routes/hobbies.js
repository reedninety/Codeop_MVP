var express = require("express");
var router = express.Router();
// const db = require("../model/helper");

const models = require("../models");

//  GET categories, select * from categories
router.get("/types", async function (req, res, next) {
  try {
    const response = await models.Category.findAll();
    res.json(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/details/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const response = await models.Category.findOne({
      where: { id: id },
    });

    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all events by a certain Category ID 
router.get("/details/:id/events", async function (req, res) {
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

module.exports = router;
