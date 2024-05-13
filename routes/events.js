var express = require("express");
var router = express.Router();
const Sequelize = require("sequelize");
// const db = require("../model/helper");

const models = require("../models");

router.get("/", async function (req, res, next) {
  try {
    const events = await models.Event.findAll();
    res.send(events);
  }catch (error) {
    res.status(500).send(error);
  }
})


module.exports = router;
