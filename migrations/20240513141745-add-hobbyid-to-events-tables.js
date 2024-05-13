'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.addColumn(
    "Events",
    "CategoryId",
    {
      type: Sequelize.INTEGER,
      references: {
        model: "Categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    }
   );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
    "Events",
   "CategoryId",
   );
  },
};
