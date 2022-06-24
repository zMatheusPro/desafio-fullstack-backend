const CreateProductService = require("../../services/products/CreateProductService");

class CreateProductController {
  async execute(req, res) {
    const { name, description, price } = req.body;

    try {
      const product = await CreateProductService.execute(
        name,
        description,
        price
      );
      return res.status(201).json(product);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

module.exports = { CreateProductController };
