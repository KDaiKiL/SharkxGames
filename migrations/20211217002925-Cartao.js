'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('cartao', { 

      id:  {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      

    nome: { 
        type: Sequelize.STRING,
        allowNull: false
    },

    bandeira: { 
        type: Sequelize.ENUM('mastercard','alelo','visa','elo','cielo','hipercard','bradesco','nukebank'),
        allowNull: false
    },

    numero: { 
        type: Sequelize.INTEGER,
        allowNull: false
    },

    tipo: { 
        type: Sequelize.ENUM('debito','credito'),
        allowNull: false
    },

    cvv: {
      type: Sequelize.INTEGER,
      allowNull: false
    }

}
     );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */

     await queryInterface.dropTable('cartao');
  }
};
