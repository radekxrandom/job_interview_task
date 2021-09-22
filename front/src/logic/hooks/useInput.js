/* eslint-disable max-lines-per-function */
import {useState} from 'react';

export default function useInput(ValidatorClass, formErrors, setFormErrors) {
	const [formValues, setFormValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		date: '',
	});

	const [validateFormValue, setValidateFormValue] = useState({
		firstName: false,
		lastName: false,
		email: false,
		date: false,
	});

	const onBlur = ev => {
		const { name, value } = ev.target;
		if (validateFormValue[name]) {
			return;
		}
		setValidateFormValue(validatedValues => ({
			...validatedValues,
			[name]: true,
		}));
		const [valid, errors] = ValidatorClass[name](value);
		setFormErrors(err => ({
			...err,
			[name]: errors[name] || '',
		}));
	};

	const onChange = ev => {
		const { name, value } = ev.target;
		if (value.length > 20) {
			//	value.length = 20;
			setFormErrors(err => ({
				...err,
				[name]: 'Too long',
			}));

			return;
		}

		setFormValues(currentValues => ({
			...currentValues,
			[name]: value,
		}));
		console.log(formErrors[name]);
		if (validateFormValue[name]) {
			// eslint-disable-next-line no-unused-vars
			const [valid, errors] = ValidatorClass[name](value);
			console.log(formErrors);
			console.log(errors);
			setFormErrors(err => ({
				...err,
				[name]: errors[name] || '',
			}));
		}
	};

	const clearForm = () => {
		const clearFormValues = {};
		Object.keys(formValues).map(key => (clearFormValues[key] = ''));
		setFormValues(clearFormValues);
		const clearValidateFormValues = {};
		Object.keys(validateFormValue).map(
			key => (clearValidateFormValues[key] = false)
		);
		setValidateFormValue(clearValidateFormValues);
	};

	return [formValues, onChange, onBlur, clearForm];
}
