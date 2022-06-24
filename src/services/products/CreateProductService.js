const Product = require("../../models/Product");

module.exports = {
  async execute(name, description, price) {
    return new Promise(async (resolve, reject) => {
      if (!name || !description || !price)
        return reject("Enter all data to continue");

      const product = await Product.create({
        name,
        description,
        price,
      });

      return resolve(product);
    });
  },
};
