'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *This to add the data 
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
 
    await queryInterface.bulkInsert('Airports',[
      {
       name : 'Kempegowda International Airport',
       cityId: 9,//una s map kr rha abhi k lie 
       createdAt:new Date(),
       updatedAt:new Date()
      },
      {
       name : 'Mysuru International Airport',
       cityId: 9,//una s map kr rha abhi k lie 
       createdAt:new Date(),
       updatedAt:new Date()
      },
      {
       name : 'Menagluru International Airport',
       cityId: 9,//una s map kr rha abhi k lie 
       createdAt:new Date(),
       updatedAt:new Date()
      },
      {
       name : 'Indira Gandhi International Airport',
       cityId: 6,//kolkata s map kr rha abhi k lie 
       createdAt:new Date(),
       updatedAt:new Date()
      }
  ],{})
  },   //this empty object

  async down (queryInterface, Sequelize) {
    /**
     * This to delete the seeded files/data
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
