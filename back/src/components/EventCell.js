/* eslint-disable react/prop-types */
import React from 'react';

const EventCell = props => {
	return (
		<div className='event' role='listitem'>
			<span className='name eventField'>
				<span className='first'>{props.firstName || 'Unavailable'}</span>
				<span className='last'>{props.lastName || 'Unavailable'}</span>
			</span>
			<span className='email eventField'>{props.email || 'Unavailable'}</span>
			<span className='date eventField'>{props.date || 'Unavailable'}</span>
		</div>
	);
};

export default EventCell;
