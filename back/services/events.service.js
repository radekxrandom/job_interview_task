const sequelize = require('sequelize');

class EventsService {
	constructor(eventOrm) {
		this.eventOrm = eventOrm;
	}
	async getAll(limit = 15, offset = 0) {
		const { rows, count } = await this.eventOrm.findAndCountAll({
			limit,
			offset,
			order: sequelize.literal('id DESC'),
		});
		const paginatedEvents = {
			events: rows,
			count,
			limit,
			offset,
		};
		return paginatedEvents;
	}
	async create(formData) {
		const event = await this.eventOrm.create(formData);
		return event;
	}
	async delete(id) {
		const event = await this.eventOrm.findByPk(id);
		await event.destroy();
		return true;
	}
}

module.exports = EventsService;
