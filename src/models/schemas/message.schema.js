const mongoose = require('mongoose');

export const MessageSchema = mongoose.schema({
	mensaje: { type: String, max: 400 },
	autor: { type: String, max: 200 },
	email: { type: String },
	timestamp: { type: Date, default: new Date() },
});

module.exports = mongoose.model('mensaje', MessageSchema);
