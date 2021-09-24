import React, {useState} from 'react';
import {CgAdd} from 'react-icons/cg';
import Zoom from 'react-reveal/Zoom';

import useFormHook from '../../../logic/hooks/useFormHook';
import useInput from '../../../logic/hooks/useInput';
import FieldsValidator from '../../../logic/tools/FieldsValidator';
import Validator from '../../../logic/tools/Validator';
import Form from '../../blocks/form';
import IconButton from '../../elements/icon-button';
import Notification from '../../elements/notification';
import EventList from '../../templates/event-list';

/* eslint-disable max-lines-per-function */
const EventPage = props => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [formErrors, setFormErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
		date: '',
	});

	const toggleForm = () => {
		setIsFormOpen(prev => !prev);
	};

	const [formValues, onChange, onBlur, clearForm] = useInput(
		FieldsValidator,
		formErrors,
		setFormErrors
	);
	const [
		isFormShaking,
		isFormRejected,
		notificationText,
		submit,
		displayErrAlert,
		percentage,
	] = useFormHook(
		Validator,
		FieldsValidator,
		setFormErrors,
		clearForm,
		formValues,
		toggleForm
	);

	return (
		<>
			<Notification show={isFormRejected} title={notificationText} />
			<EventList>
				{!isFormOpen ? (
					<IconButton
						buttonType='openForm'
						icon={CgAdd}
						btnClass='prmpt'
						buttonAction={toggleForm}
						ariaLabel='openForm'
						iconClass='addIcon'
						btnAnnotationClass='promptText'
						annotation='Add new event'
					/>
				) : (
					<Form
						isFormShaking={isFormShaking}
						closeForm={toggleForm}
						submitForm={submit}
						onChange={onChange}
						onBlur={onBlur}
						formValues={formValues}
						formErrors={formErrors}
						percentage={percentage}
					/>
				)}
			</EventList>
		</>
	);
};
export default EventPage;
