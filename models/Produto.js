
module.exports = (sequelize,DataTypes) => {

    const Produto = sequelize.define('Produto',{
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },

        nome: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        nome: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        preco: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },

        desconto: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },

        categoria: { 
            type: DataTypes.STRING,
            allowNull: false
        }



    },{
        timestamps: false,
        tableName: 'produto'
    })

    return Produto
}