const { Router } = require("express");

const routes = Router();

const usersRoutes = require("./users.routes");

// Import routes from other files
routes.use("/users", usersRoutes);

module.exports = { routes };
