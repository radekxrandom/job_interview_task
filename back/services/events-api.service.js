const sequelize = require('sequelize')

class EventApiService {
	constructor(eventOrm){
		this.eventOrm = eventOrm;
	}
	async getAll(limit = 15, offset = 0){
		// TO-DO add pagination
		const {rows, count} = await this.eventOrm.findAndCountAll({
  limit,
  offset,
		order:  sequelize.literal('id DESC')
	});
		const paginatedEvents = {
			events: rows,
			count,
			limit,
			offset
		}
		return paginatedEvents;
	}
	async create(formData){
		const event = await this.eventOrm.create(formData);
		return event;
	}
}

module.exports = EventApiService;