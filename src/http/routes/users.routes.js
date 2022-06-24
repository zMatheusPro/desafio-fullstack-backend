const { Router } = require("express");

const {
  CreateUserController,
} = require("../../controllers/users/createUserController");

const userRoutes = Router();

// Route to create a new user
userRoutes.post("/", new CreateUserController().execute);

module.exports = userRoutes;
