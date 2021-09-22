const Joi = require('joi');

const eventSchema = Joi.object({
	firstName: Joi.string().max(40).required(),
	lastName: Joi.string().max(40).required(),
	email: Joi.string().email().max(40).required(),
	date: Joi.date().iso().required(),
});

module.exports = eventSchema;
