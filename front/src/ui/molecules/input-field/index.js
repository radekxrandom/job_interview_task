import React from 'react';

import FieldValidationError from '../../elements/field-validation-error';
import Input from '../../elements/input';

const InputField = props => {
	return (
		<span className='inputWrapper'>
			<Input {...props} isFieldValid={!!props.formError} required />
			{props.formError && (
				<FieldValidationError
					formErrorKey={props.fieldName}
					formError={props.formError}
				/>
			)}
		</span>
	);
};

export default InputField;
