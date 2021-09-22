class FieldsValidator {
	static checkForFieldExistence(value, key) {
		let errors = {};
		let isFormValid = true;
		if (!value) {
			errors[key] = 'Cannot be empty';
			isFormValid = false;
		}
		if (value.length > 40) {
			errors[key] = 'Too long';
			isFormValid = false;
		}
		return [isFormValid, errors];
	}

	static checkRegex(value, key, regex = /^[a-z\u00C0-\u024F\u1E00-\u1EFF]+$/i) {
		let errors = {};
		let isFormValid = true;
		if (typeof value !== 'undefined' && !regex.test(value)) {
			isFormValid = false;
			errors[key] = 'Invalid format';
		}
		return [isFormValid, errors];
	}

	static firstName(name) {
		const [isFormValid, errors] = FieldsValidator.checkForFieldExistence(
			name,
			'firstName'
		);
		if (!isFormValid) {
			return [isFormValid, errors];
		}
		return FieldsValidator.checkRegex(name, 'firstName');
	}
	static lastName(name) {
		const [isFormValid, errors] = FieldsValidator.checkForFieldExistence(
			name,
			'lastName'
		);
		if (!isFormValid) {
			return [isFormValid, errors];
		}
		return FieldsValidator.checkRegex(name, 'lastName');
	}
	static email(email) {
		const [isFormValid, errors] = FieldsValidator.checkForFieldExistence(
			email,
			'email'
		);
		const emailValidatorRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!isFormValid) {
			return [isFormValid, errors];
		}
		return FieldsValidator.checkRegex(email, 'email', emailValidatorRegex);
	}
	static date(date) {
		let errors = {};
		let isFormValid = true;
		if (isNaN(Date.parse(date))) {
			isFormValid = false;
			errors.date = 'Invalid date';
		}
		return [isFormValid, errors];
	}
}

export default FieldsValidator;
