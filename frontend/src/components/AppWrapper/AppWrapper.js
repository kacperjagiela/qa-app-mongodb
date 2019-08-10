import * as React from 'react';
import { Layout } from 'antd'; // eslint-disable-line no-unused-vars
import { withRouter } from 'react-router-dom';
import NavigationSider from '../Reusable/Components/NavigationSider'; // eslint-disable-line no-unused-vars
import Switcher from '../Routing/Switcher'; // eslint-disable-line no-unused-vars
import { getCookie } from '../Reusable/cookies';

class AppWrapper extends React.Component {
	render() {
		const { history } = this.props;
		const { pathname } = history.location;
		let subPath = '';
		if (pathname.indexOf('/qa-app-mongodb/') === pathname.lastIndexOf('/')) {
			subPath = pathname.replace('/qa-app-mongodb/', '');
		} else {
			subPath = pathname.substring(pathname.indexOf('/qa-app-mongodb/') + 1, pathname.lastIndexOf('/qa-app-mongodb/'));
		}
		const LoggedIn = () => (
			<Layout style={{ minHeight: '100vh', maxHeight: '100vh' }}>
				<NavigationSider
					selected={subPath}
				/>
				<Switcher refresh={this.refresh} />
			</Layout>
		);
		const NotLoggedIn = () => (
			<Layout style={{ minHeight: '100vh', maxHeight: '100vh' }}>
				<Switcher refresh={this.refresh} />
			</Layout>
		);
		return (
			getCookie('login') ? <LoggedIn /> : <NotLoggedIn />
		);
	}
}
const AppWrapperWithRouter = withRouter(AppWrapper);

export default AppWrapperWithRouter;
