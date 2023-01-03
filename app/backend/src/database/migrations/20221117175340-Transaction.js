'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('transaction', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      debitedAccountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        eferences:{
          model: 'Account',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      creditedAccountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        eferences:{
          model: 'Account',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      value: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('transaction');
  }
};
