'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventName: {
        type: Sequelize.STRING
      },
      eventPrice: {
        type: Sequelize.INTEGER
      },
      eventLocation: {
        type: Sequelize.STRING
      },
      eventDescription: {
        type: Sequelize.STRING
      },
      eventTime: {
        type: Sequelize.TIME
      },
      eventDate: {
        type: Sequelize.DATE
      },
      skillLevel: {
        type: Sequelize.STRING
      },
      equipNeeded: {
        type: Sequelize.TINYINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};