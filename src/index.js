import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './state/store'
import App from './App';
import './assets/css/fonts.scss';
import './assets/css/null.scss';
import './assets/css/index.scss';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));


