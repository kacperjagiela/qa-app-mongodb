import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {
	Layout, Form, Input, Icon, Button, Typography, message,
} from 'antd';
import { getCookie } from '../Reusable/cookies';
import { changeDetails, getUserData } from '../Reusable/services';
import { LayoutStyled } from '../Styles';
import Loading from '../Reusable/Components/Loading';

const { Content, Footer } = Layout;

class SettingsForm extends React.Component {
	state = {
		logged: getCookie('login'),
		previousDescription: '',
		ready: false,
	}

	componentDidMount() {
		const { logged } = this.state;
		getUserData(logged).then((res) => {
			if (res.data.description !== 'undefined') {
				setTimeout(() => this.setState({
					previousDescription: res.data.description,
					ready: true,
				}), 1000);
			}
		});
	}

	onClose = () => {
		const { history } = this.props;
		const { logged } = this.state;
		history.push(`/profile/${logged}`);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { form } = this.props;
		const { logged } = this.state;
		form.validateFields((err, values) => {
			if (values) {
				changeDetails(values, logged)
					.then((result) => {
						if (result) {
							message.success('Changed successfully!', 2, this.onClose);
						} else {
							message.error('Something went wrong, try again!', 2);
						}
					});
			}
		});
	}

	render() {
		const {
			logged, previousDescription, ready,
		} = this.state;
		const { form, history } = this.props;
		if (logged) {
			return (
				ready ? (
					<LayoutStyled>
						<Content style={{ paddingTop: '10vh' }}>
							<Typography.Title level={2} style={{ paddingTop: '5vh', textAlign: 'center', marginBottom: '12px' }}>
								Settings
								{' '}
								<Icon type="setting" />
							</Typography.Title>
							<Form onSubmit={this.handleSubmit}>
								<Typography.Paragraph>
									Change your description:
								</Typography.Paragraph>
								<Form.Item>
									{
										form.getFieldDecorator('description', { initialValue: previousDescription })(<Input.TextArea placeholder='Update description' />)
									}
								</Form.Item>
								<Button style={{ width: '60%', marginLeft: '20%', marginTop: '5%' }} type='primary' htmlType='submit'>
									Save description
								</Button>
							</Form>
							<Footer style={{ width: '100%', textAlign: 'center' }}>
								Created by Kacper Jagieła
							</Footer>
						</Content>
					</LayoutStyled>
				) : <Loading />
			);
		}
		history.push('/home');
		return null;
	}
}

const Settings = withRouter(Form.create({ name: 'settings' })(SettingsForm));

export default Settings;
