'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('account', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      balance: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 100,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('account');
  }
};
