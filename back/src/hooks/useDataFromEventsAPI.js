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
			setData(events);
			setLoading(false);
		} catch (err) {
			console.log('Server error?');
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	return [fetchData, loading, data];
}
