const ProductDAO = require('../dao/product.dao');
const Model = new ProductDAO();
class ProductService {
	constructor() {
	}
	async getProducts() {
		return await Model.findAll();
	}

	async getProductById(id) {
		const result = await Model.findById(id);
		return result;
	}

	async postProduct(data) {
		const result = await Model.create(data);
		return result;
	}

	async updateProduct(id, product) {
		const result = await Model.update(id, product);
		return result;
	}

	async deleteProduct(id) {
		const result = await Model.delete(id);
		return result;
	}
}

module.exports = ProductService;
