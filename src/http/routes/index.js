const { Router } = require("express");

const routes = Router();

const usersRoutes = require("./users.routes");
const productsRoutes = require("./products.routes");

// Import routes from other files
routes.use("/users", usersRoutes);
routes.use("/products", productsRoutes);

module.exports = { routes };
