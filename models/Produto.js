
module.exports = (sequelize,DataTypes) => {

    const Produto = sequelize.define('Produto',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },

        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },

        nome: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        
        preco: { 
            type: DataTypes.DECIMAL,
            allowNull: false
        },

        desconto: { 
            type: DataTypes.DECIMAL
        },

        categoria: { 
            type: DataTypes.STRING
        },
        
        descricao: { 
            type: DataTypes.TEXT
        },

    },{
        timestamps: false,
        tableName: 'produto'
    })

    Produto.associate = (models) => {
        Produto.belongsTo(models.Usuario, {

            as: "usuario",

            foreignKey: "usuario_id"

        })
    }

    return Produto
}