const Joi = require('joi');

const validate = (schema, property) => {
	return (req, res, next) => {
		const { error } = schema.validate(req.body, { abortEarly: false });
		const valid = error == null;

		if (valid) {
			next();
		} else {
			const { details } = error;
			// wasn't sure about regex vs .slice(1).replace(...) but it turns out that the first option is way more performant with v8 https://khef.co/2019-javascript-string-replace-regex-vs-substring/
			const message = details.map(el => ({
				message: el.message.replace(/"/g, ''),
				key: el.context.key,
			}));

			return res.status(422).json({ error: message });
		}
	};
};
module.exports = validate;
