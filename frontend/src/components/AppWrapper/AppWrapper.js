import * as React from 'react';
import { Layout } from 'antd'; // eslint-disable-line no-unused-vars
import { withRouter } from 'react-router-dom';
import NavigationSider from '../Reusable/Components/NavigationSider'; // eslint-disable-line no-unused-vars
import Switcher from '../Routing/Switcher'; // eslint-disable-line no-unused-vars
import { getCookie } from '../Reusable/cookies';

class AppWrapper extends React.Component {
	LoggedIn = subPath => (
		<Layout style={{ minHeight: '100vh', maxHeight: '100vh' }}>
			<NavigationSider
				selected={subPath}
			/>
			<Switcher refresh={this.refresh} />
		</Layout>
	);

	NotLoggedIn = () => (
		<Layout style={{ minHeight: '100vh', maxHeight: '100vh' }}>
			<Switcher refresh={this.refresh} />
		</Layout>
	);

	render() {
		const { history } = this.props;
		const { pathname } = history.location;
		let subPath = '';
		if (pathname.indexOf('/') === pathname.lastIndexOf('/')) {
			subPath = pathname.replace('/', '');
		} else {
			subPath = pathname.substring(pathname.indexOf('/') + 1, pathname.lastIndexOf('/'));
		}
		return (
			getCookie('login') ? this.LoggedIn(subPath) : this.NotLoggedIn()
		);
	}
}
const AppWrapperWithRouter = withRouter(AppWrapper);

export default AppWrapperWithRouter;
