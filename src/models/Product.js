const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        }, 
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT
        },
        type: {
            type: DataTypes.TEXT
        },
        dateEntry:{
            type: DataTypes.DATEONLY
        }
    })
}