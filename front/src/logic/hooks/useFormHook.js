/* eslint-disable max-lines-per-function */
import axios from 'axios';
import {useState} from 'react';
import {useSetRecoilState} from 'recoil';

import {eventsList} from '../state/atoms/eventsList';

export default function useFormHook(
	FormValidator,
	FieldsValidator,
	setFormErrors,
	clearForm,
	formValues
) {
	const [isFormShaking, setIsFormShaking] = useState(false);
	const setEvents = useSetRecoilState(eventsList);
	const [percentage, setPercentage] = useState(0);

	const displayErrAlert = () => {
		setIsFormShaking(true);
		setTimeout(() => setIsFormShaking(false), 300);
	};

	const post = async form => {
		setPercentage(1);
		const config = {
			onUploadProgress: function (progressEvent) {
				let percentCompleted = Math.round(
					(progressEvent.loaded * 100) / progressEvent.total
				);
				console.log(percentCompleted);
				setPercentage(percentCompleted);
			},
		};
		axios
			.post(process.env.REACT_APP_SERVER_URL, form, config)
			.then(res => {
				console.log(res.data);
				setTimeout(() => {
					setPercentage(0);
					setEvents(oldEventsList => [res.data, ...oldEventsList]);
				}, 1000);
			})
			.catch(error => {
				console.error('Upload Error:', error);
			});
	};

	const submit = async () => {
		const formData = {
			...formValues,
		};
		const validator = new FormValidator(FieldsValidator, true);
		const [isValid, errors] = validator.validate(formData);
		if (!isValid) {
			setFormErrors(errors);
			displayErrAlert();
			return;
		}
		clearForm('');
		await post(formData);
	};
	return [isFormShaking, submit, displayErrAlert, percentage];
}
