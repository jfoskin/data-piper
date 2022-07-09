import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import store from './redux';
import { Provider } from 'react-redux';


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('main')
);
