const jwt = require("jsonwebtoken");
const config = require("../../config/jsonwebtoken");

const secret = config.token;
const expiration = config.expiresIn;

module.exports = {
  sign(payload) {
    return jwt.sign({}, secret, {
      subject: String(payload),
      expiresIn: expiration,
    });
  },
  verify(token) {
    return jwt.verify(token, secret);
  },
};
