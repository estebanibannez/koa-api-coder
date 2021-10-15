const Model = require('../models/schemas/product.schema');

class ProductDAO {
	async findAll() {
		return new Promise((resolve, reject) =>
			Model.find({}, (err, docs) => {
				if (err) return reject(err);
				return resolve(docs);
			})
				.sort({ date: 'desc' })
				.lean(),
		);
	}

	async findById(id) {
		return new Promise((resolve, reject) =>
			Model.findOne({ _id: id }, (err, docs) => {
				if (err) return reject(err);
				return resolve(docs);
			}),
		);
	}

	async create(data) {
		return new Promise((resolve, reject) =>
			Model.create(data, (err, docs) => {
				if (err) return reject(err);
				return resolve(docs);
			}),
		);
	}

	async update(id, { nombre, precio, descripcion, stock, thumbnail }) {
		const update = { $set: { nombre, precio, descripcion, stock, thumbnail } };

		return new Promise((resolve, reject) =>
			Model.updateOne({ _id: id }, update, {}, (err, docs) => {
				if (err) return reject(err);
				return resolve(docs);
			}),
		);
	}

	async delete(id) {
		return new Promise((resolve, reject) =>
			Model.remove({ _id: id }, (err, docs) => {
				if (err) return reject(err);
				return resolve(docs);
			}),
		);
	}
}

module.exports = ProductDAO;
