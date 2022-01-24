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
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      nome: {
        type: Sequelize.STING,
        allowNull: false
      },

      sobrenome: {
        type: Sequelize.STING,
        allowNull: false
      },

      data_nascimento: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      cep: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      endereco: {
        type: Sequelize.STING,
        allowNull: false
      },

      estado: {
        type: Sequelize.ENUM(
          'Acre',
          'Alagoas',
          'Amapá',
          'Amazonas',
          'Espírito Santo',
          'Goías',
          'Mato Grosso do Sul',
          'Minas Gerais',
          'Pará',
          'Rio Grande do Norte',
          'Rio Grande do Sul',
          'Rondônia',
          'São Paulo',
          'Sergipe',
          'Tocantins'
        ),
        allowNull: false
      },

      bairro: {
        type: Sequelize.STING,
        allowNull: false
      },

      cidade: {
        type: Sequelize.STING,
        allowNull: false
      },

      complemento: {
        type: Sequelize.STING,
        allowNull: false
      },

      referencia: {
        type: Sequelize.STING,
        allowNull: false
      },

      username: {
        type: Sequelize.STING,
        allowNull: false
      },

      senha: {
        type: Sequelize.STING,
        allowNull: false
      },

      email: {
        type: Sequelize.STING,
        allowNull: false
      },

      imagem_perfil: {
        type: Sequelize.STING,
       allowNull: false
      },

      imagem_plano_de_fundo : {
        type: Sequelize.STING,
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
