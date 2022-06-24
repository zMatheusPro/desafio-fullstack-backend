const express = require("express");
const { routes } = require("./routes");
require("../database");

const app = express();

app.use(express.json({ limit: "1mb" }));

// Import routes
app.use(routes);

// Export the server for initialization in the main.js file
module.exports = app;
