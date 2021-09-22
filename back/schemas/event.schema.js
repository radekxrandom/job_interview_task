const Joi = require('joi');

const eventSchema = Joi.object({
	firstName: Joi.string().max(20).required(),
	lastName: Joi.string().max(20).required(),
	email: Joi.string().email().max(20).required(),
	date: Joi.date().iso().required(),
});

module.exports = eventSchema;
