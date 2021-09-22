import classnames from 'classnames';
import React from 'react';

const Card = props => {
	return (
		// TO-DO event -> card
		<div className={classnames('event', props.eventCardType)} role={props.role}>
			{props.children}
		</div>
	);
};
export default Card;
