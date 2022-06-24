const Sequelize = require("sequelize");
const Config = require("../config/database");

// Load models
const User = require("../models/User");
const Product = require("../models/Product");

// Create a new sequelize instance
const dbConnection = new Sequelize(Config);

// Initialize models
User.init(dbConnection);
Product.init(dbConnection);

module.exports = dbConnection;
