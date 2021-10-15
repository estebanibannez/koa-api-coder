const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	nombre: { type: String, required: true, max: 100 },
	precio: { type: Number, required: true },
	descripcion: { type: String, required: true },
	stock: { type: Number, required: true },
	thumbnail: { type: String, max: 100 },
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('producto', ProductSchema);
