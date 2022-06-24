const CreateUserService = require("../../services/users/CreateUserService");

class CreateUserController {
  async execute(req, res) {
    const { name, email, password } = req.body;

    try {
      await CreateUserService.execute(name, email, password);
      return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

module.exports = { CreateUserController };
