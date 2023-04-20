const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        }, 
        email: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        role:{
            type: DataTypes.TEXT,
            allowNull: false
        },
    })
}