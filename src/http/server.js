const express = require("express");

const app = express();

app.use(express.json({ limit: "1mb" }));

// Export the server for initialization in the main.js file
module.exports = app;
