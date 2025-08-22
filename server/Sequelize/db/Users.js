const sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING(20),
            allowNull: false,

        },
        password:{
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    },{
        tableName: 'users',
        timestamps: false,
        }
    )
}