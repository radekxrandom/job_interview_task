import axios from 'axios';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';

import {eventsList} from '../state/atoms/eventsList';

export default function useDataFromEventsAPI() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useRecoilState(eventsList);

	const fetchData = async () => {
		try {
			const result = await axios.get(process.env.REACT_APP_SERVER_URL);

			console.log(result.data);
			const events = result.data.events;
			setLoading(false);
			setData(events);
		} catch (err) {
			console.log(err.name);
			console.log(err.message);
			console.log(err.stack);
			console.log('Server error?');
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	return [loading, data];
}
