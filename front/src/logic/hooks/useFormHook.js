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
	formValues,
	toggleForm
) {
	const [isFormShaking, setIsFormShaking] = useState(false);
	const [isFormRejected, setIsFormRejected] = useState(false);
	const [notificationText, setNotificationText] = useState('');
	const setEvents = useSetRecoilState(eventsList);
	const [percentage, setPercentage] = useState(0);

	const displayErrAlert = () => {
		setIsFormShaking(true);
		setTimeout(() => setIsFormShaking(false), 300);
	};

	const displayNotifications = notificationArray => {
		const notification = notificationArray.shift();
		if (!notification) {
			setIsFormRejected(false);
			setNotificationText('');
			return;
		}
		setIsFormRejected(true);
		setNotificationText(notification);
		setTimeout(() => displayNotifications([]), 2000);
		setTimeout(() => displayNotifications(notificationArray), 2500);
	};

	const annotateFormWithReturnedErrors = errors => {
		const errorsObject = {};
		console.log(errors);
		errors.map(el => (errorsObject[el.key] = el.message));
		setFormErrors(errorsObject);
		console.log(errorsObject);
	};

	const handleFormError = error => {
		if (error.response) {
			setPercentage(0);
			setIsFormRejected(true);
			console.log(error.response.data.error);
			const returnedErrors = error.response.data.error;
			console.log(returnedErrors);
			if (returnedErrors) {
				console.log('?');
				annotateFormWithReturnedErrors(returnedErrors);
				const errorMessages = returnedErrors.map(el => el.message);
				displayNotifications(errorMessages);
				return;
			}
			const { data, status } = error.response;
			const notificationsAlternative = [`Server error ${status}`, data];
			displayNotifications(notificationsAlternative);
			return;
		}
		displayNotifications(['Unknown error']);
		return;
	};

	const post = async form => {
		setPercentage(1);
		const config = {
			onUploadProgress: progressEvent => {
				console.log(progressEvent);
				let percentCompleted = Math.round(
					(progressEvent.loaded * 100) / progressEvent.total
				);
				console.log(percentCompleted);
				setPercentage(percentCompleted);
			},
		};
		try {
			const sentRequest = await axios.post(
				process.env.REACT_APP_SERVER_URL,
				form,
				config
			);
			setTimeout(() => {
				setPercentage(0);
				clearForm('');
				toggleForm(false);
				setEvents(oldEventsList => [sentRequest.data, ...oldEventsList]);
			}, 1000);
			console.log(sentRequest);
		} catch (error) {
			handleFormError(error);
		}
	};

	const submit = async () => {
		const formData = {
			...formValues,
		};
		/*
		const validator = new FormValidator(FieldsValidator, true);
		const [isValid, errors] = validator.validate(formData);
		if (!isValid) {
			setFormErrors(errors);
			displayErrAlert();
			return;
		}*/
		try {
			await post(formData);
		} catch (error) {
			console.log(error);
			setIsFormRejected(true);
			setTimeout(() => {
				setPercentage(0);
				setIsFormRejected(false);
			}, 1000);
			console.error('Upload Error:', error);
		}
	};
	return [
		isFormShaking,
		isFormRejected,
		notificationText,
		submit,
		displayErrAlert,
		percentage,
	];
}
