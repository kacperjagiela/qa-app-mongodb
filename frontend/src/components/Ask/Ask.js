import * as React from 'react';
import {
	Form, Layout, Input, Button, Typography,
} from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { getCookie } from '../Reusable/cookies';
import { askQuestion } from '../Reusable/services';
import { LoginDiv } from '../Styles';

const { Content, Footer } = Layout;

class AskForm extends React.Component {
	state = {
		logged: getCookie('login'),
		loading: false,
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			loading: true,
		});
		const { form, history, match } = this.props;
		const { logged } = this.state;
		form.validateFields((err, values) => {
			if (!err) {
				askQuestion(match.params.username, values.questionContent, logged)
					.then((res) => {
						if (res.data) history.push(`/profile/${match.params.username}`);
					})
					.catch(error => error);
			}
		});
	}

	render() {
		const { form, history } = this.props;
		const { pathname } = history.location;
		const { logged, loading } = this.state;
		const username = pathname.substring(pathname.lastIndexOf('/') + 1, pathname.length);
		if (logged) {
			return (
				<Layout>
					<Content>
						<LoginDiv style={{
							width: '100%', height: '90%', paddingLeft: '25%', paddingRight: '25%',
						}}
						>
							<Typography.Title level={2} style={{ textAlign: 'center' }}>
								You can ask
								<Link to={`/profile/${username}`}>{` ${username} `}</Link>
								anything!
							</Typography.Title>
							<Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
								<Form.Item>
									{form.getFieldDecorator('questionContent')(
										<Input.TextArea
											placeholder='Your question here'
										/>,
									)}
									<Button type='primary' loading={loading} htmlType='submit' style={{ marginRight: -12 }}>Ask question</Button>
								</Form.Item>
							</Form>
						</LoginDiv>
						<Footer style={{ width: '100%', textAlign: 'center' }}>
							Created by Kacper Jagieła
						</Footer>
					</Content>
				</Layout>
			);
		}
		history.push('/home');
		return null;
	}
}

const Ask = withRouter(Form.create({ name: 'ask_form' })(AskForm));

export default Ask;