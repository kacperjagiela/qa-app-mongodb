import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { getCookie } from '../Reusable/cookies';
import Home from './Home';
import WelcomePage from '../WelcomePage/WelcomePage';

const HomeWrapper = ({ history }) => {
	const LoggedIn = () => (
		<Home history={history} />
	);
	const NotLoggedIn = () => (
		<WelcomePage history={history} />
	);
	return (
		getCookie('login') ? <LoggedIn /> : <NotLoggedIn />
	);
};

export default withRouter(HomeWrapper);
