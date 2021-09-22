import React from 'react';
import Fade from 'react-reveal/Fade';

import useDataFromEventsAPI from '../../../logic/hooks/useDataFromEventsAPI';
import Event from '../../blocks/event';
import LoadingIndicator from '../../elements/loading-indicator';

const EventList = props => {
	const [loading, data] = useDataFromEventsAPI();

	return (
		<>
			{loading ? (
				<LoadingIndicator />
			) : (
				<div className='eventsList'>
					{props.children}
					{data &&
						data.map(eventData => (
							<Fade key={eventData.id} bottom>
								<span role='list'>
									<Event key={eventData.id} {...eventData} />
								</span>
							</Fade>
						))}
				</div>
			)}
		</>
	);
};
export default EventList;
