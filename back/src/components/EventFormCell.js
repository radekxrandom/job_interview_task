/* eslint-disable react/prop-types */
import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import {IoArrowBackCircleOutline, IoCheckmarkCircleOutline} from 'react-icons/io5';
import Fade from 'react-reveal/Fade';
import Shake from 'react-reveal/Shake';

const EventFormCell = props => {
	return (
		<Fade>
			<div role='form' className={`event form-event ${props.animation}`}>
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
				<span className='name eventFormField'>
					<span className='inputWrapper'>
						<input
							type='text'
							name='firstName'
							className={
								props.formErrors.firstName?.length
									? 'firstNameInput inpt nameinpt redBorder'
									: 'firstNameInput inpt nameinpt'
							}
							placeholder='First Name'
							onChange={props.onChange}
							value={props.formValues.firstName}
							required
						/>
						{props.formErrors.firstName && (
							<Shake>
								<span className='firstNameError err' role='alert'>
									{props.formErrors.firstName}
								</span>
							</Shake>
						)}
					</span>
					<span className='inputWrapper'>
						<input
							type='text'
							name='lastName'
							className={
								props.formErrors.lastName?.length
									? 'lastNameInput inpt nameinpt redBorder'
									: 'lastNameInput inpt nameinpt'
							}
							placeholder='Last Name'
							onChange={props.onChange}
							value={props.formValues.lastName}
							required
						/>
						{props.formErrors.lastName && (
							<Shake>
								<span className='lastNameError err' role='alert'>
									{props.formErrors.lastName}
								</span>
							</Shake>
						)}
					</span>
				</span>
				<span className='email eventFormField'>
					<span className='inputWrapper'>
						<input
							type='email'
							name='email'
							className={
								props.formErrors.email?.length
									? 'emailInput inpt redBorder'
									: 'emailInput inpt'
							}
							placeholder='Email'
							onChange={props.onChange}
							value={props.formValues.email}
							required
						/>
						{props.formErrors.email && (
							<Shake>
								<span className='emailError err' role='alert'>
									{props.formErrors.email}
								</span>
							</Shake>
						)}
					</span>
				</span>
				<span className='date eventFormField'>
					<span className='inputWrapper'>
						<input
							type='date'
							name='date'
							className={
								props.formErrors.date ? 'dateInput inpt redBorder' : 'dateInput inpt'
							}
							onChange={props.onChange}
							value={props.formValues.date}
							required
							aria-label='Date'
						/>
						{props.formErrors.date && (
							<Shake>
								<span className='dateError err' role='alert'>
									{props.formErrors.date}
								</span>
							</Shake>
						)}
					</span>
				</span>
				<span
					className='form-add ic'
					onClick={props.submitForm}
					aria-label='submit'
					type='submit'
					tabIndex='0'
					role='button'>
					<IoCheckmarkCircleOutline className='acceptArrow' />
				</span>
				<span className='submit label'>Add Event</span>
				{props.percentage > 0 && (
					<ProgressBar className='progressBar' completed={props.percentage} />
				)}
			</div>
		</Fade>
	);
};

export default EventFormCell;
