const User = require("../../models/User");
const { compare } = require("bcryptjs");
const JWT = require("../helpers/JWT");

module.exports = {
  async execute(email, password) {
    return new Promise(async (resolve, reject) => {
      if (!email || !password) return reject("Enter all data to continue");

      if (typeof email != "string" || typeof password != "string")
        return reject("Invalid data type");

      const user = await User.findOne({ where: { email } });

      if (!user) return reject("Invalid email or password");

      const passwordIsValid = await compare(password, user.password);

      if (!passwordIsValid) return reject("Invalid email or password");

      try {
        const token = JWT.sign(user.id);
        const response = {
          token,
          user: {
            name: user.name,
            email: user.email,
          },
        };
        return resolve(response);
      } catch (err) {
        return reject(err);
      }
    });
  },
};
