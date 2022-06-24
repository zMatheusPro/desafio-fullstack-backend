const User = require("../../models/User");
const { hash } = require("bcryptjs");
const validateEmail = require("../helpers/validateEmail");

module.exports = {
  async execute(name, email, password) {
    return new Promise(async (resolve, reject) => {
      if (!name || !email || !password)
        return reject("Enter all data to continue");

      if (
        typeof name != "string" ||
        typeof email != "string" ||
        typeof password != "string"
      )
        return reject("Invalid data type");

      if (!validateEmail(email)) {
        return reject("Invalid Email Address");
      }

      const existsUserByEmail = await User.findOne({ where: { email } });

      if (existsUserByEmail)
        return reject("This email has already been registered");

      const passwordHash = await hash(password, 8);

      const user = await User.create({
        name,
        email,
        password: passwordHash,
      });

      return resolve(user);
    });
  },
};
