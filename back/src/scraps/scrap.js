const checkNames = (fields, keys, isFormValid, errors) => {
	for (let key in keys) {
		if (!fields[key]) {
			isFormValid = false;
			errors[key] = 'Cannot be empty';
		}

		if (typeof fields[key] !== 'undefined') {
			if (!fields[key].match(/^[a-zA-Z]+$/)) {
				isFormValid = false;
				errors[key] = 'Only letters are allowed';
			}
		}
	}
	return [isFormValid, errors];
};

const checkEmail = (email, isFormValid, errors) => {
	if (!email) {
		isFormValid = false;
		errors.email = 'Cannot be empty';
	}
	const emailValidatorRegex = /^\w+[\w-+.]\@\w+([-.]\w+).[a-zA-Z]{2,}$/;
	if (typeof email !== 'undefined' && !email.match(emailValidatorRegex)) {
		isFormValid = false;
		errors.email = 'Invalid email address';
	}
	return [isFormValid, errors];
};

const checkDate = (date, isFormValid, errors) => {
	if (isNaN(Date.parse(date))) {
		isFormValid = false;
		errors.date = 'Invalid date';
	}
	return [isFormValid, errors];
};
const validatror = fields => {
	let errors = {};
	let isFormValid = true;

	[isFormValid, errors] = checkNames(
		fields,
		['firstName', 'lastName'],
		isFormValid,
		errors
	);
	[isFormValid, errors] = checkEmail(fields.email, isFormValid, errors);
	[isFormValid, errors] = checkDate(fields.date, isFormValid, errors);

	return [isFormValid, errors];
};
