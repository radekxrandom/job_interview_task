import {useState} from 'react';

export default function useInput(ValidatorClass, formErrors, setFormErrors) {
	const [formValues, setFormValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		date: '',
	});

	const onChange = ev => {
		const { name, value } = ev.target;
		setFormValues(currentValues => ({
			...currentValues,
			[name]: value,
		}));
		console.log(formErrors[name]);
		if (formErrors[name]?.length) {
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
		setFormValues({
			firstName: '',
			lastName: '',
			email: '',
			date: '',
		});
	};

	return [formValues, onChange, clearForm];
}
