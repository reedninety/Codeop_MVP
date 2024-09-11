'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('events', 'eventDescription', {
      type: Sequelize.TEXT // or use TEXT for longer descriptions
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('events', 'eventDescription', {
      type: Sequelize.STRING(255) // Assuming the original length was 255
    });
  }
};
