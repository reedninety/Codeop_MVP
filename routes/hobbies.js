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

module.exports = router;
