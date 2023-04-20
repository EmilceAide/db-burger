const { DataTypes } = require('sequelize');
const { ROLES } = require('./roles')

module.exports = (database) => {
    database.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role:{
            type: DataTypes.ENUM(ROLES.ADMIN, ROLES.WAITER, ROLES.CHEF),
            defaultValue: ROLES.WAITER,
            allowNull: false
        },
    })
}