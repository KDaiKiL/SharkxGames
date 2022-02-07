'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('usuario', {

      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },

      dataNascimento: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },

      endereco: {
        type: Sequelize.STRING,
        allowNull: false
      },

      estado: {
        type: Sequelize.ENUM(
          "Acre",
          "Alagoas",
          "Amapá",
          "Amazonas",
          "Bahia ",
          "Ceará ",
          "Espírito Santo",
          "Goiás ",
          "Maranhão ",
          "Mato Grosso ",
          "Mato Grosso do Sul ",
          "Minas Gerais ",
          "Pará ",
          "Paraíba ",
          "Paraná ",
          "Pernambuco ",
          "Piauí ",
          "Rio de Janeiro ",
          "Rio Grande do Norte ",
          "Rio Grande do Sul ",
          "Rondônia ",
          "Roraima ",
          "Santa Catarina ",
          "São Paulo",
          "Sergipe",
          "Tocantins",
        ),
        allowNull: false
      },

      bairro: {
        type: Sequelize.STRING,
        allowNull: false
      },

      cidade: {
        type: Sequelize.STRING,
        allowNull: false
      },

      complemento: {
        type: Sequelize.STRING,
        allowNull: false
      },

      referencia: {
        type: Sequelize.STRING,
        allowNull: false
      },

      userName: {
        type: Sequelize.STRING,
        allowNull: false
      },

      senha: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
  
      imagemPerfil: {
        type: Sequelize.STRING,
        allowNull: false
      },

      imagemDeFundo: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('usuario');
  }
};