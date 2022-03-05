module.exports = (sequelize, DataTypes) => {

    const Imagem = sequelize.define('Imagem',{
      
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      
      username: {
        type: DataTypes.STRING,
        allowNull: false
      }

    },{
      timestamps: false,
        tableName: 'imagem'
    })
  
    return Imagem
  }
  