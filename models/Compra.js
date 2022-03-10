
module.exports = (sequelize,DataTypes) => {

    const Compra = sequelize.define('Compra',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },

        frete: { 
            type: DataTypes.DECIMAL
        },

        usuario_id: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },

        produto_id: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },

        cartao_id: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },{
        timestamps: false,
        tableName: 'compra'
    })

    

    return Compra
}