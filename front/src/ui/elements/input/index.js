import classnames from 'classnames';
import React from 'react';

const Input = props => {
	return (
		<input
			type={props.type}
			name={props.fieldName}
			className={classnames('inpt', `${props.fieldName}Input`, props.classes, {
				redBorder: !!props.isFieldValid,
			})}
			placeholder={props.placeholder}
			onChange={props.onChange}
			onBlur={props.onBlur}
			value={props.formValue}
			aria-label={props.ariaLabel || props.placeholder}
			required
		/>
	);
};

export default Input;
