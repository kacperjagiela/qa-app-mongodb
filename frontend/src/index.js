import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import AppWrapper from './components/AppWrapper/AppWrapper';
import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
	<CookiesProvider>
		<HashRouter basename='/'>
			<AppWrapper />
		</HashRouter>
	</CookiesProvider>,
	document.getElementById('root'),
);
