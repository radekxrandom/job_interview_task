class Validator {
  constructor(isFormValid = true) {
    this.errors = {};
    this.isFormValid = isFormValid;
  }
  static checkForFieldExistence(value, key) {
    let errors = {};
    let isFormValid = true;
    if (!value) {
      errors[key] = "Cannot be empty";
      isFormValid = false;
    }
    return [isFormValid, errors];
  }

  static firstName(name) {
    return this.checkForFieldExistence(name, "firstName");
  }
  static lastName(name) {
    return this.checkForFieldExistence(name, "lastName");
  }
  static email(email) {
    let [isFormValid, errors] = Validator.checkForFieldExistence(
      email,
      "email"
    );
    const emailValidatorRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (typeof email !== "undefined" && !emailValidatorRegex.test(email)) {
      isFormValid = false;
      errors.email = "Invalid email address";
    }
    return [isFormValid, errors];
  }
  static date(date) {
    let errors = {};
    let isFormValid = true;
    if (isNaN(Date.parse(date))) {
      isFormValid = false;
      errors.date = "Invalid date";
    }
    return [isFormValid, errors];
  }
  validateAll(fields) {
    for (let key in fields) {
      let [isFormValid, errors] = Validator[key](fields[key]);
      if (!isFormValid) {
        this.isFormValid = false;
      }
      this.errors = { ...this.errors, ...errors };
    }
    return [this.isFormValid, this.errors];
  }
}

export default Validator;
