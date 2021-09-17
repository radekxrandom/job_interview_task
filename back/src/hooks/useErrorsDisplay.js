import {useState} from 'react';

import {mainAxios} from '../axios/config';

export default function useFormHook(validator) {
	const [animation, setAnimation] = useState('');
	const [formErrors, setFormErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
		date: '',
	});

	const submit = () => {
		const formData = {
			firstName: formValues.firstName,
			lastName: formValues.lastName,
			email: formValues.email,
			date: formValues.date,
		};
		const validator = new Validator(isFormValid);
		const [isValid, errors] = validator.validateAll(formData);
		if (!isValid) {
			setIsFormValid(false);
			setFormErrors(errors);
			return;
		}
		setFormValues('');
		handleSubmit(formData);
	};

	const displayErrAlert = text => {
		openAlert(text, 'info');
		setAnimation('shake-horizontal');
		setTimeout(() => setAnimation(''), 300);
	};

	const submit = async (method, url, form) => {
		try {
			const post = await mainAxios[method](url, form);
			return post;
		} catch (err) {
			if (err.response) {
				displayErrAlert(err.response.data[0]?.message?.text);
			} else {
				displayErrAlert('Nieokreślony problem');
			}
			return false;
		}
	};

	return [animation, submit, displayErrAlert];
}
