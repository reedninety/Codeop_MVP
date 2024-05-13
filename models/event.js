'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // define association here
      Event.belongsTo(models.Category, {
      foreignKey: "CategoryId",
    });
  }
  }
  Event.init({
    eventName: DataTypes.STRING,
    eventPrice: DataTypes.INTEGER,
    eventLocation: DataTypes.STRING,
    eventDescription: DataTypes.STRING,
    eventTime: DataTypes.TIME,
    eventDate: DataTypes.DATE,
    skillLevel: DataTypes.STRING,
    equipNeeded: DataTypes.TINYINT,
    CategoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};