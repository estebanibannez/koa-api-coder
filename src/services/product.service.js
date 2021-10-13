const Model = require("../models/schemas/product.schema");
const ProductDAO = require("../dao/product.dao");

class ProductService {
  getProducts() {
    const result = await ProductDAO.findAll();
    return result;
  }

  getProductById(id) {
    const result = await ProductDAO.findById();
    return result;
  }

  postProduct(product) {
    const result = await ProductDAO.create(product);
    return result;
  }

  updateProduct(id, product) {
    const result = await ProductDAO.findOneAndUpdate(id, product);
    return result;
  }

  deleteProduct(id) {
    const result = await ProductDAO.deleteOne(id);
    return result;
  }
}

module.exports = ProductService;
