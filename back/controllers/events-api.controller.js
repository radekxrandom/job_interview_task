const EventsService = require('../services/events.service');
const Event = require('../models/event.model');
const logError = require('../utilities/log-error');

module.exports.getEvents = async (req, res) => {
	try {
		const { limit, offset } = req.query;

		const service = new EventsService(Event);
		const events = await service.getAll(limit, offset);
		return res.status(200).json(events);
	} catch (err) {
		logError(err);
	}
};

module.exports.createEvent = async (req, res) => {
	try {
		const service = new EventsService(Event);
		const event = await service.create(req.body);
		return res.status(201).json(event);
	} catch (err) {
		logError(err);
	}
};

module.exports.deleteEvent = async (req, res) => {
	try {
		const service = new EventsService(Event);
		const event = await service.delete(req.params.id);
		return res.status(201).json(true);
	} catch (err) {
		logError(err);
	}
};
