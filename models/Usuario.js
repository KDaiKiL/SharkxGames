module.exports = (sequelize, DataTypes) => {

  const Usuario = sequelize.define('Usuario',{
    
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    data_nascimento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    senha: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    telefone: {
      type: DataTypes.NUMBER,
      allowNull: false
    },

    cpf: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    cep: {
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

    cidade: {
      type: DataTypes.STRING,
      allowNull: false
    },

    bairro: {
      type: DataTypes.STRING,
      allowNull: false
    },

    referencia: {
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

  },{
    timestamps: false,
     tableName: 'usuario'
  })

  Usuario.associate = (models) => {

    Usuario.hasMany(models.Produto, {

      as: "produto",

      foreignKey: "usuario_id"

    })

  }

  return Usuario
}
