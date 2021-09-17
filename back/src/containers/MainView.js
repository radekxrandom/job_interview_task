import React, {useState} from 'react';
import Zoom from 'react-reveal/Zoom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import EventFormCell from '../components/EventFormCell';
import EventTable from '../components/EventTable';
import FormOpenPrompt from '../components/FormOpenPrompt';
import useFormHook from '../hooks/useFormHook';
import useInput from '../hooks/useInput';
import Validator from '../tools/Validator';

const MainView = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [formErrors, setFormErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
		date: '',
	});
	const [formValues, onChange, clearForm] = useInput(
		Validator,
		formErrors,
		setFormErrors
	);
	const [animation, submit, displayErrAlert, percentage] = useFormHook(
		Validator,
		setFormErrors,
		clearForm,
		formValues
	);

	const toggleForm = () => {
		setIsFormOpen(prev => !prev);
	};

	return (
		<>
			<TransitionGroup>
				<Zoom>
					<EventTable>
						{!isFormOpen ? (
							<FormOpenPrompt openForm={toggleForm} isFormOpen={isFormOpen} />
						) : (
							<EventFormCell
								animation={animation}
								closeForm={toggleForm}
								submitForm={submit}
								onChange={onChange}
								formValues={formValues}
								formErrors={formErrors}
								percentage={percentage}
							/>
						)}
					</EventTable>
				</Zoom>
			</TransitionGroup>
		</>
	);
};

export default MainView;
