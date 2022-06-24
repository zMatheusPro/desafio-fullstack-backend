const ListAllProductsService = require("../../services/products/ListAllProductsService");

class ListAllProductsController {
  async execute(req, res) {
    try {
      const products = await ListAllProductsService.execute();
      return res.json(products);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

module.exports = { ListAllProductsController };
