import React from 'react';

import Text from '../../elements/text';
import Card from '../../molecules/card';

const Event = props => {
	return (
		<Card eventCardType='event' role='listitem'>
			<Text fieldClass='name' isEventField={true}>
				<Text fieldClass='first'>{props.firstName}</Text>
				<Text fieldClass='last'>{props.lastName}</Text>
			</Text>
			<Text fieldClass='email' isEventField={true}>
				{props.email}
			</Text>
			<Text fieldClass='date' isEventField={true}>
				{props.date}
			</Text>
		</Card>
	);
};

export default Event;
