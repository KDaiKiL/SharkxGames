module.exports = (sequelize, DataTypes) => {

  const Usuario = sequelize.define('Usuario',{

    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },

    dataNascimento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    telefone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    cpf: {
      type: DataTypes.STRING,
      allowNull: false
    },

    endereco: {
      type: DataTypes.STRING,
      allowNull: false
    },

    estado: {
      type: DataTypes.ENUM(
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
      type: DataTypes.STRING,
      allowNull: false
    },

    cidade: {
      type: DataTypes.STRING,
      allowNull: false
    },

    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    complemento: {
      type: DataTypes.STRING,
      allowNull: false
    },

    referencia: {
      type: DataTypes.STRING,
      allowNull: false
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    senha: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    imagemPerfil: {
      type: DataTypes.STRING,
      
    },

    imagemDeFundo: {
      type: DataTypes.STRING,
      
    }


  },{
    timestamps: false,
     tableName: 'usuario'
  })

  return Usuario
}
