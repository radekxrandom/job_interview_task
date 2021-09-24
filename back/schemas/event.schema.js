const Joi = require('joi');

const eventSchema = Joi.object({
	firstName: Joi.string().max(40).required().label('First Name'),
	lastName: Joi.string().max(40).required().label('Last Name'),
	email: Joi.string().email().max(40).required().label('Email'),
	date: Joi.date().iso().required().label('Date'),
});

module.exports = eventSchema;
