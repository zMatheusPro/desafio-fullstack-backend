const { Router } = require("express");
const {
  CreateProductController,
} = require("../../controllers/products/CreateProductController");
const {
  ListAllProductsController,
} = require("../../controllers/products/ListAllProductsController");
const isAuthenticated = require("../middlewares/isAuthenticated");

const productsRoutes = Router();

// Route to create a new product
productsRoutes.post(
  "/",
  isAuthenticated,
  new CreateProductController().execute
);

// Route to list all products
productsRoutes.get(
  "/",
  isAuthenticated,
  new ListAllProductsController().execute
);

module.exports = productsRoutes;
