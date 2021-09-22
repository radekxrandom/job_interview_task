class Validator {
	constructor(fieldsValidator, isFormValid = true) {
		this.errors = {};
		this.isFormValid = isFormValid;
		this.fieldsValidator = fieldsValidator;
	}
	validate(fields) {
		for (let key in fields) {
			let [isFormValid, errors] = this.fieldsValidator[key](fields[key]);
			if (!isFormValid) {
				this.isFormValid = false;
			}
			this.errors = { ...this.errors, ...errors };
		}
		return [this.isFormValid, this.errors];
	}
}

export default Validator;
