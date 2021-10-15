const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
	mensaje: { type: String, max: 400 },
	autor: { type: String, max: 200 },
	email: { type: String },
	timestamp: { type: Date, default: new Date() },
});

module.exports = mongoose.model('mensaje', MessageSchema);
