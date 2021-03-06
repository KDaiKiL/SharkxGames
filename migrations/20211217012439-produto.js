'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('produto', { 
      id: {
        type: Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },

    nome: { 
        type: Sequelize.STRING,
        allowNull: false
    },

    preco: { 
        type: Sequelize.INTEGER,
        allowNull: false
    },

    desconto: { 
        type: Sequelize.INTEGER,
        allowNull: false
    },

    categoria: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: { 
        type: Sequelize.TEXT,
        allowNull: false
    },



}
      );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */

     await queryInterface.dropTable('produto');
  }
};
