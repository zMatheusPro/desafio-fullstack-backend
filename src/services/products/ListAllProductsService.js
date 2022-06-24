const Product = require("../../models/Product");

module.exports = {
  async execute() {
    return new Promise(async (resolve, reject) => {
      const products = await Product.findAll();
      return resolve(products);
    });
  },
};
