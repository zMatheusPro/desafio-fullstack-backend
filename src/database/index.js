const Sequelize = require("sequelize");
const Config = require("../config/database");

// Load models
const User = require("../models/User");

// Create a new sequelize instance
const dbConnection = new Sequelize(Config);

// Initialize models
User.init(dbConnection);

module.exports = dbConnection;
