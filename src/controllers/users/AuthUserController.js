const AuthUserService = require("../../services/users/AuthUserService");

class AuthUserController {
  async execute(req, res) {
    const { email, password } = req.body;
    try {
      const token = await AuthUserService.execute(email, password);
      return res.json(token);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

module.exports = { AuthUserController };
