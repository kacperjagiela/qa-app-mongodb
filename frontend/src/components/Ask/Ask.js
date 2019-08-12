import * as React from 'react';
import {
	Form, Layout, Input, Button, Typography,
} from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { getCookie } from '../Reusable/cookies';
import { askQuestion } from '../Reusable/services';
import { LoginDiv } from '../Styles';

const { Content } = Layout;

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
		const { form, username, onOk } = this.props;
		const { logged } = this.state;
		form.validateFields((err, values) => {
			if (!err) {
				askQuestion(username, values.questionContent, logged)
					.then((res) => {
						if (res.data) onOk();
					})
					.catch(error => error);
			}
		});
	}

	render() {
		const { form, history, onCancel } = this.props;
		const { pathname } = history.location;
		const { logged, loading } = this.state;
		const username = pathname.substring(pathname.lastIndexOf('/') + 1, pathname.length);
		if (logged) {
			return (
				<Layout style={{ bakcgroundColor: 'white' }}>
					<Content style={{ backgroundColor: 'white' }}>
						<LoginDiv style={{
							width: '100%', height: '100%', paddingLeft: '15%', paddingRight: '15%', backgroundColor: 'white',
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
									<Button onClick={() => onCancel()} style={{ marginRight: '10px' }}>Cancel</Button>
									<Button type='primary' loading={loading} htmlType='submit'>Ask question</Button>
								</Form.Item>
							</Form>
						</LoginDiv>
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
