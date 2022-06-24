const JWT = require("../../services/helpers/JWT");
const User = require("../../models/User");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  // Bearer token
  const [, token] = authHeader.split(" ");

  try {
    const decoded = JWT.verify(token);
    // Find user by id
    const userId = decoded.sub;
    const userExists = await User.findOne({ where: { id: userId } });

    // If user doesn't exist, return 401
    if (!userExists) {
      return res.status(401).json({ error: "Token invalid" });
    }

    // If user exists, set user to req.userId
    req.userId = userId;

    return next();
  } catch (err) {
    // If token is invalid, return 401
    return res.status(401).json({ error: "Token invalid" });
  }
};
