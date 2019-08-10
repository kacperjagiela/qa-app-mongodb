/* eslint-disable */
import * as React from 'react';
import {
	Menu, Icon, Drawer,
} from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getCookie } from '../cookies';

const Bar = styled.div`
	width: 40px;
	height: 5px;
	background-color: black;
	margin: 6px 0;
	transition: 0.4s;
`;

const HamburgerContainer = styled.div`
	height:5vh;
	display: inline-block;
	cursor: pointer;
	z-index: 3;
	position: absolute;
	padding:4px;
	padding-top:6px;
	badding-bottom:1px;
	left:14px;
`;

class NavigationSider extends React.Component {
	state = {
		visible: false,
		width: 0,
	};

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({
			width: window.innerWidth,
		});
	}

	showDrawer = () => {
		this.setState({
			visible: true,
		});
	}

	onClose = () => {
		this.setState({
			visible: false,
		});
	}

	Mobile = () => (
		<Drawer
			closable
			title='Menu'
			placement='left'
			onClose={this.onClose}
			visible={this.state.visible}
			width={this.state.width > 767 ? 300 : '100%'}
			height='100%'
		>
			<Menu theme='light' mode='inline' defaultSelectedKeys={this.props.selected.split(' ')} style={{ height: '100%' }}>
				<Menu.Item key='home'>
					<Link to='/home'>
						<Icon type='home' />
						<span className='nav-text'>Home</span>
					</Link>
				</Menu.Item>
				<Menu.Item key='profile'>
					<Link to={`/profile/${getCookie('login')}`}>
						<Icon type='profile' />
						<span className='nav-text'>Your profile</span>
					</Link>
				</Menu.Item>
				<Menu.Item key='settings'>
					<Link to='/settings'>
						<Icon type='setting' />
						<span className='nav-text'>Settings</span>
					</Link>
				</Menu.Item>
				<Menu.Item key='logout'>
					<Link to='/logout'>
						<Icon type='logout' />
						<span className='nav-text'>Log out</span>
					</Link>
				</Menu.Item>
			</Menu>
		</Drawer>
	)

	render() {
		const { visible } = this.state;

		const Hamburger = () => (
			<HamburgerContainer
				onClick={this.showDrawer}
				onKeyPress={this.showDrawer}
				role="button"
				tabIndex="0"
				style={{ background: 'rgb(0,0,0,0.0)', opacity: visible ? 0 : 1 }}
			>
				<Bar />
				<Bar />
				<Bar />
			</HamburgerContainer>
		);

		return (
			<React.Fragment>
				<Hamburger />
				{this.Mobile()}
			</React.Fragment>
		);
	}
}

export default NavigationSider;
