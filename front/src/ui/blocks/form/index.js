import ProgressBar from '@ramonak/react-progress-bar';
import classnames from 'classnames';
import React from 'react';
import {IoArrowBackCircleOutline, IoCheckmarkCircleOutline} from 'react-icons/io5';
import Fade from 'react-reveal/Fade';

import IconButton from '../../elements/icon-button';
import Card from '../../molecules/card';
import InputField from '../../molecules/input-field';

/* eslint-disable max-lines-per-function */
const Form = props => {
	return (
		<Fade>
			<Card
				eventCardType={classnames('form-event', {
					'shake-horizontal': props.isFormShaking,
				})}
				role='form'>
				<IconButton
					buttonType='closeForm'
					icon={IoArrowBackCircleOutline}
					btnClass='form-go-back ic'
					buttonAction={props.closeForm}
					ariaLabel='closeForm'
					iconClass='backArrow'
					btnAnnotationClass='go-back label'
					annotation='Go Back'
				/>
				<span className='name eventFormField'>
					<InputField
						type='text'
						onChange={props.onChange}
						onBlur={props.onBlur}
						formValue={props.formValues.firstName}
						formError={props.formErrors.firstName}
						fieldName='firstName'
						placeholder='First Name'
						classes='nameInpt'
					/>
					<InputField
						type='text'
						onChange={props.onChange}
						onBlur={props.onBlur}
						formValue={props.formValues.lastName}
						formError={props.formErrors.lastName}
						fieldName='lastName'
						placeholder='Last Name'
						classes='nameInpt'
					/>
				</span>
				<span className='email eventFormField'>
					<InputField
						type='email'
						onChange={props.onChange}
						onBlur={props.onBlur}
						formValue={props.formValues.email}
						formError={props.formErrors.email}
						fieldName='email'
						placeholder='Email'
						classes=''
					/>
				</span>
				<span className='date eventFormField'>
					<InputField
						type='date'
						onChange={props.onChange}
						onBlur={props.onBlur}
						formValue={props.formValues.date}
						formError={props.formErrors.date}
						fieldName='date'
						placeholder='DD/MM/YYYY'
						ariaLabel='Date'
						classes=''
					/>
				</span>
				<IconButton
					buttonType='submitForm'
					btnClass='form-add ic'
					icon={IoCheckmarkCircleOutline}
					buttonAction={props.submitForm}
					ariaLabel='submit'
					isSubmitButton={true}
					iconClass='acceptArrow'
					btnAnnotationClass='submit label'
					annotation='Add Event'
				/>
				{props.percentage > 0 && (
					<ProgressBar className='progressBar' completed={props.percentage} />
				)}
			</Card>
		</Fade>
	);
};

export default Form;

/*
	<span className='form-go-back ic'>
					<IoArrowBackCircleOutline
						className='backArrow'
						onClick={props.closeForm}
						aria-label='closeForm'
						tabIndex='0'
						role='button'
					/>
				</span>
				<span className='go-back label'>Go Back</span>
				*/
