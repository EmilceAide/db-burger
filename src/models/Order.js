const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        }, 
        client: {
            type: DataTypes.STRING
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        },
        dateEntry:{
            type: DataTypes.DATE
        }
    })
}