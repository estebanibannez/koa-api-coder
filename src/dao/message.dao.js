const Model = require("../models/schemas/message.schema");

class ProductDAO {
  async findAll() {
    const response = await Model.find();
    return response;
  }

  async findById(id) {
    const response = await Model.findById(id);
    return response;
  }

  async create(product) {
    const response = await Model.create(product);
    return response;
  }

  async update(id, product) {
    const response = await Model.findByIdAndUpdate(id, product);
    return response;
  }
}

module.exports = ProductDAO;
