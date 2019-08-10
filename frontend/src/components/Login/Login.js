import * as React from 'react';
import {
	Form, Icon, Input, Button, Checkbox, Typography,
} from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { LoginDiv } from '../Styles';
import { getCookie, setCookie } from '../Reusable/cookies';
import { login } from '../Reusable/services';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logged: getCookie('login'),
			status: '',
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { form, history } = this.props;
		form.validateFields((err, values) => {
			if (!err) {
				login(values)
					.then((res) => {
						if (res.data === 'Logged in') {
							this.setState({
								status: 'success',
							}, () => {
								setCookie('login', values.username);
								history.push('/home', { refresh: true });
							});
						} else {
							this.setState({
								status: 'error',
							});
						}
					})
					.catch(error => (error));
			}
		});
	}

	render() {
		const { logged, status } = this.state;
		const { form, history } = this.props;
		if (logged) {
			history.push('/', { refresh: true });
			return (null);
		}
		return (
			<LoginDiv>
				<Form onSubmit={this.handleSubmit}>
					<Typography.Title type={2}>Welcome back!</Typography.Title>
					<Form.Item validateStatus={status}>
						{form.getFieldDecorator('username', {
							rules: [{ required: true, message: 'Please enter your username!' }],
						})(
							<Input prefix={<Icon type='user' />} placeholder='Username' allowClear />,
						)}
					</Form.Item>
					<Form.Item validateStatus={status}>
						{form.getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please enter your password!' }],
						})(
							<Input prefix={<Icon type='lock' />} type='password' placeholder='Password' allowClear />,
						)}
					</Form.Item>
					<Form.Item>
						{form.getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true,
						})(<Checkbox>Remember me</Checkbox>)}
						<Link className='login-form-forgot' to='/forgot'>
									Forgot password
						</Link>
						<br />
						<Button type='primary' htmlType='submit' style={{ width: '100%' }}>
									Log in
						</Button>
								Or
						<Link to='/register'> register now!</Link>
					</Form.Item>
				</Form>
			</LoginDiv>
		);
	}
}

const Login = withRouter(Form.create({ name: 'normal_login' })(LoginForm));

export default Login;
