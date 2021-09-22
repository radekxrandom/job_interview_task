import classnames from 'classnames';
import React from 'react';

const Text = props => {
	return (
		<span
			className={classnames(props.fieldClass, { eventField: props.isEventField })}>
			{props.children}
		</span>
	);
};
export default Text;
