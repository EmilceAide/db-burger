const { Sequelize } = require('sequelize');
const userModel = require('./models/User');
const productModel = require('./models/Product');
const  orderModel = require('./models/Order');

require('dotenv').config()
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false
});

userModel(database);
productModel(database);
orderModel(database);

module.exports ={
    database, 
    ...database.models
}