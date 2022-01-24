'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('compras', { id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
     },
    
     produto: {
       type: Sequelize.STRING,
       allowNull: false
     },

     cartao: {
      type: Sequelize.INTEGER,
      allowNull: false
     },

     checkout: {
       type: Sequelize.STRING,
      allowNull: false
    },

    frete: {
      type: Sequelize.INTEGER,
       allowNull: false
    }
    
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
      await queryInterface.dropTable('compras');
  }
};
