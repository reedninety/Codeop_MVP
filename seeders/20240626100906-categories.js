'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', 
      [
        {
          categoryName: 'Outdoor Sports',
          categoryDescription: 'A great way to socialise, keep fit, and get out of the house, Outdoor Sports is a perfect way to shake up your routine and try something new.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'Indoor Sports',
          categoryDescription: "Don't fancy risking the weather? Find a local court or pool so you can enjoy some sporty indoor activities without the threat of a raincheck.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'Food & Drink',
          categoryDescription: "From beginners cooking class to sommelier level tasting, find a new way to experience whatever you find tastiest.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'Music',
          categoryDescription: 'Join an open-mic night or a choir, or even learn a new instrument at a communal orchestra.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'Games',
          categoryDescription: "Chess, board games, escape rooms, consoles, there's every sort of game you could imaging, always something new to try.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'Art & Creativity',
          categoryDescription: "Whether you prefer a solo art project or a sociable evening trying something new, find something that will let you explore your creativity.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'Volunteering & Community',
          categoryDescription: "Give back to your community and meet new friends.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'TV & Film',
          categoryDescription: "Movie nights, TV discussion clubs, watch parties.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'Dance & Theatre',
          categoryDescription: "Join a new community theatre group, learn some new steps, or pick up a long-forgotten passion.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'Nature',
          categoryDescription: "Bird-watching, conservation, community gardens.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

    ], 
    {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
