const EventApiService = require('../services/events-api.service');
const Event = require('../models/event.model');
const logError = require("../utilities/log-error");

module.exports.getEvents = async (req, res) => {
	try{
	const {limit, offset} = req.query;

	const service = new EventApiService(Event);
	const events =	await service.getAll(limit, offset);
	return res.status(200).json(events);
	}catch(err){
		logError(err);
	}
}

module.exports.createEvent =	async (req, res) => {
	try{
	const service = new EventApiService(Event);
	const event = await service.create(req.body);
	return res.status(201).json(event);
	}catch(err){
		logError(err);
	}
}