import React from 'react';
import Fade from 'react-reveal/Fade';

const Notification = props => {
	return (
		<Fade top big opposite when={props.show}>
			<span className='notification'>{props.title}</span>
		</Fade>
	);
};
export default Notification;
