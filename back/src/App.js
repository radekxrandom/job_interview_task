import './App.css';

import React from 'react';
import {RecoilRoot} from 'recoil';

import MainView from './containers/MainView';

function App() {
	return (
		<RecoilRoot>
			<MainView />
		</RecoilRoot>
	);
}

export default App;
