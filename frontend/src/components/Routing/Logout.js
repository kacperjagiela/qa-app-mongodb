import { removeCookie } from '../Reusable/cookies';


const Logout = ({ history }) => {
	removeCookie('login');
	history.push('/qa-app-mongodb/', { refresh: true });
	return null;
};

export default Logout;
