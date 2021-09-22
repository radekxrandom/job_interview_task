import React from 'react';
import {CgAdd} from 'react-icons/cg';
import {IoArrowBackCircleOutline, IoCheckmarkCircleOutline} from 'react-icons/io5';

const iconPicker = {
	openForm: CgAdd,
	closeForm: IoArrowBackCircleOutline,
	submitForm: IoCheckmarkCircleOutline,
};

const IconButton = props => {
	//const icon = iconPicker[props.buttonType];
	return (
		<>
			<span
				className={props.btnClass}
				onClick={props.buttonAction}
				aria-label={props.ariaLabel}
				type={props.isSubmitButton ? 'submit' : ''}
				tabIndex='0'
				role='button'>
				{<props.icon className={props.iconClass} />}
			</span>
			<span className={props.btnAnnotationClass}>{props.annotation}</span>
		</>
	);
};

export default IconButton;
