
module.exports = (sequelize,DataTypes) => {

    const Cartao = sequelize.define('Cartao',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },

        nome: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        bandeira: { 
            type: DataTypes.ENUM('mastercard','alelo','visa','elo','cielo','hipercard','bradesco','nukebank'),
            allowNull: false
        },

        numero: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },

        tipo: { 
            type: DataTypes.ENUM('debito,credito'),
            allowNull: false
        },

        validade: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        cvv: {
            type: DataTypes.INTEGER,
            allowNull: false
        }


    },{
        timestamps: false,
        tableName: 'cartao'
    })

    return Cartao
}