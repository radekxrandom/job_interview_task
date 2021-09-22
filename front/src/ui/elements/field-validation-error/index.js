import classnames from 'classnames';
import React from 'react';
import Shake from 'react-reveal/Shake';

const FieldValidationError = props => {
	return (
		<Shake>
			<span
				className={classnames('err', `${props.formErrorKey}Error`)}
				role='alert'>
				{props.formError}
			</span>
		</Shake>
	);
};

export default FieldValidationError;
