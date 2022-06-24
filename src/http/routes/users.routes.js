const { Router } = require("express");
const { AuthUserController } = require("../../controllers/users/AuthUserController");

const {
  CreateUserController,
} = require("../../controllers/users/createUserController");

const userRoutes = Router();

// Route to create a new user
userRoutes.post("/", new CreateUserController().execute);

// Route to authenticate a user
userRoutes.post("/auth", new AuthUserController().execute);

module.exports = userRoutes;
