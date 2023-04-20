const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        }, 
        client: {
            type: DataTypes.TEXT
        },
        status:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        dateEntry:{
            type: DataTypes.DATEONLY
        }
    })
}