import './App.css';

import React from 'react';
import {RecoilRoot} from 'recoil';

import EventPage from './ui/pages/event-page';

//import MainView from './containers/MainView';
function App() {
	return (
		<RecoilRoot>
			<EventPage />
		</RecoilRoot>
	);
}

export default App;
