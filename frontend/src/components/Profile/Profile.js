import * as React from 'react';
import {
	Layout, Typography, Button, Avatar, Modal,
} from 'antd';
import { Link } from 'react-router-dom';
import Ask from '../Ask/Ask';
import { getCookie } from '../Reusable/cookies';
import {
	getUserData, getQuestions, serverIp, checkForAvatar,
} from '../Reusable/services';
import { Profilepic, Questions, LayoutStyled } from '../Styles';
import Loading from '../Reusable/Components/Loading';
import Question from '../Reusable/Components/Question';

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default class Profile extends React.Component {
	state = {
		questions: [],
		ready: false,
		visible: false,
	};

	componentDidMount() {
		this.refresh();
	}

	refresh = () => {
		const { match } = this.props;
		// Get profile information from backend
		getUserData(match.params.username)
			.then((res) => {
				getQuestions(res.data._id)
					.then((response) => {
						checkForAvatar(res.data.username)
							.then((result) => {
								setTimeout(() => this.setState({
									username: res.data.username,
									// email: res.data.email,
									description: res.data.description,
									// profilepic: res.data.profilepic,
									questions: response.data,
									avatar: result.data,
									ready: true,
									visible: false,
								}), 1000);
							});
					});
			});
	}

	handleOk = () => {
		this.refresh();
	}

	handleCancel = () => {
		this.setState({
			visible: false,
		});
	}

	showModal = () => {
		this.setState({
			visible: true,
		});
	}

	render() {
		const { history, match } = this.props;
		const {
			avatar, username, description, questions, ready, visible,
		} = this.state;
		const LoggedIn = () => {
			if (ready) {
				return (
					<LayoutStyled>
						<Content style={{
							width: '100%', height: '95vh', paddingTop: '5vh',
						}}
						>
							<div style={{ marginBottom: '100px' }}>
								<Link to={`/profile/${username}`} style={{ float: 'left', marginRight: '10px' }}>
									{
										avatar
											? <Profilepic src={`${serverIp}/public/${username}`} alt='100x100' style={{ zIndex: 2 }} />
											: <Avatar icon='user' size={80} style={{ zIndex: 2 }} />
									}
								</Link>
								<Title level={2}>{username}</Title>
								{
									description !== 'undefined'
										? <Paragraph strong>{description}</Paragraph>
										: null
								}
							</div>
							<Modal
								title={`Ask ${username}`}
								visible={visible}
								onOk={this.handleOk}
								onCancel={this.handleCancel}
								footer={null}
							>
								<Ask onCancel={this.handleCancel} username={username} onOk={this.handleOk} />
							</Modal>
							{getCookie('login') === match.params.username
								? null
								: <Button type='primary' onClick={() => this.showModal()}>Ask this user</Button>}
							<Questions>
								{questions.reverse().map(question => (
									<Question
										question={question}
										refresh={this.refresh}
										username={username}
										key={question._id}
									/>
								))}
							</Questions>
							<Footer style={{ width: '100%', textAlign: 'center' }}>
								Created by Kacper Jagieła
							</Footer>
						</Content>
					</LayoutStyled>
				);
			}
			return (
				<Loading />
			);
		};

		const NotLoggedIn = () => {
			history.push('/home');
			return null;
		};
		return (
			getCookie('login') ? <LoggedIn /> : <NotLoggedIn />
		);
	}
}
