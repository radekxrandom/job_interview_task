import classnames from 'classnames';
import React from 'react';

import styles from './style.css';

const Input = props => {
	return (
		<input
			type={props.inputType}
			name={props.fieldName}
			className={classnames(styles.inpt, `${props.fieldName}Input` props.classes, {
				redBorder: !props.isFieldValid,
			})}
			placeholder={props.placeholder}
			onChange={props.onChange}
			value={props.formValue}
			aria-label={props.ariaLabel || props.placeholder}
			required
		/>
	);
};

export default Input;
