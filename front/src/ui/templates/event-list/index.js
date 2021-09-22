import React, {Suspense} from 'react';
import Fade from 'react-reveal/Fade';

import useDataFromEventsAPI from '../../../logic/hooks/useDataFromEventsAPI';
import Event from '../../blocks/event';
import Error from '../../elements/error';
import ErrorBoundary from '../../elements/error-boundary';
import LoadingIndicator from '../../elements/loading-indicator';

const EventList = props => {
	const [loading, data] = useDataFromEventsAPI();

	return (
		<>
			<ErrorBoundary fallback={<Error text='Server Connection Failed' />}>
				<Suspense fallback={<LoadingIndicator />}>
					{!loading && (
						<div className='eventsList'>
							{props.children}
							{data.map(eventData => (
								<Fade key={eventData.id} bottom>
									<span role='list'>
										<Event key={eventData.id} {...eventData} />
									</span>
								</Fade>
							))}
						</div>
					)}
				</Suspense>
			</ErrorBoundary>
		</>
	);
};
export default EventList;
