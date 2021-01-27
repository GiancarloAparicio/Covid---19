import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import * as serviceWorker from './test/serviceWorker';
import Home from './components/templates/Home';

const App = () => {
	
	return (
		<Home />
	);
};

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
