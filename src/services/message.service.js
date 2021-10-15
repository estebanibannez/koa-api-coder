const MessageDAO = require('../dao/message.dao');
const Model = new MessageDAO();
class MessageService {
	constructor() {
	}
	async getMessage() {
		return await Model.findAll();
	}

	async getMessageById(id) {
		const result = await Model.findById(id);
		return result;
	}

	async postMessage(data) {
		const result = await Model.create(data);
		return result;
	}

	async updateMessage(id, product) {
		const result = await Model.update(id, product);
		return result;
	}

	async deleteMessage(id) {
		const result = await Model.delete(id);
		return result;
	}
}

module.exports = MessageService;
