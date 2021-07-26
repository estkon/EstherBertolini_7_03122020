'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('commentaries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId:{
        type: Sequelize.INTEGER,
        allowNull: false

      },
      PostId:{
        type: Sequelize.INTEGER,
        allowNull: false

      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('commentaries');
  }
};