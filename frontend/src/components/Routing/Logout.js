import { removeCookie, getCookie } from '../Reusable/cookies';


const Logout = ({ history }) => {
	if (getCookie('login')) {
		removeCookie('login');
		history.push('/home');
		return null;
	}
	history.push('/home');
	return null;
};

export default Logout;
