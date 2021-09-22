import React, {useState} from 'react';
import {CgAdd} from 'react-icons/cg';
import Zoom from 'react-reveal/Zoom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import useFormHook from '../../../logic/hooks/useFormHook';
import useInput from '../../../logic/hooks/useInput';
import Validator from '../../../logic/tools/Validator';
import Form from '../../blocks/form';
import IconButton from '../../elements/icon-button';
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
	const [formValues, onChange, onBlur, clearForm] = useInput(
		Validator,
		formErrors,
		setFormErrors
	);
	const [isFormShaking, submit, displayErrAlert, percentage] = useFormHook(
		Validator,
		setFormErrors,
		clearForm,
		formValues
	);

	const toggleForm = () => {
		setIsFormOpen(prev => !prev);
	};

	return (
		<TransitionGroup>
			<Zoom>
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
			</Zoom>
		</TransitionGroup>
	);
};
export default EventPage;
