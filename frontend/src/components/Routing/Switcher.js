import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import HomeWrapper from '../Home/HomeWrapper';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import Logout from './Logout';
import Ask from '../Ask/Ask';
import Search from '../Search/Search';
import Forgot from '../Forgot/Forgot';

const Switcher = () => (
	<Switch>
		<Route exact path='/qa-app-mongodb/ask/:username' component={Ask} />
		<Route exact path='/qa-app-mongodb/forgot' component={Forgot} />
		<Route exact path='/qa-app-mongodb/settings' component={Settings} />
		<Route exact path='/qa-app-mongodb/profile/:username' component={withRouter(Profile)} />
		<Route exact path='/qa-app-mongodb/register' component={withRouter(Registration)} />
		<Route exact path='/qa-app-mongodb/login' component={Login} />
		<Route exact path='/qa-app-mongodb/logout' component={withRouter(Logout)} />
		<Route exact path='/qa-app-mongodb/search/:search' component={withRouter(Search)} />
		<Route path='/qa-app-mongodb/' component={withRouter(HomeWrapper)} />
	</Switch>
);

export default Switcher;
