const express = require('express');
var cors = require('cors');
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

module.exports = server; 