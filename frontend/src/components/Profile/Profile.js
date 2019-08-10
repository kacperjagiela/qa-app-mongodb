import * as React from 'react';
import {
	Layout, Typography, Button, Avatar,
} from 'antd';
import { Link } from 'react-router-dom';
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
	};

	componentDidMount() {
		this.refresh();
		setTimeout(() => this.setState({
			ready: true,
		}), 1000);
	}

	refresh = () => {
		const { match } = this.props;
		// Get profile information from backend
		getUserData(match.params.username)
			.then((res) => {
				this.setState({
					username: res.data.username,
					// email: res.data.email,
					description: res.data.description,
					// profilepic: res.data.profilepic,
				});
				// Get questions from backend
				getQuestions(res.data.id)
					.then((response) => {
						this.setState({ questions: response.data });
					});
				checkForAvatar(res.data.username)
					.then((result) => {
						this.setState({
							avatar: result.data,
						});
					});
			});
	}

	render() {
		const { history, match } = this.props;
		const {
			avatar, username, description, questions, ready,
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
								<a href={`/profile/${username}`} style={{ float: 'left', marginRight: '10px' }}>
									{
										avatar
											? <Profilepic src={`${serverIp}/public/${username}`} alt='100x100' style={{ zIndex: 2 }} />
											: <Avatar icon='user' size={80} style={{ zIndex: 2 }} />
									}
								</a>
								<Title level={2}>{username}</Title>
								{
									description !== 'undefined'
										? <Paragraph strong>{description}</Paragraph>
										: null
								}
							</div>
							{getCookie('login') === match.params.username
								? null
								: <Link to={`/ask/${username}`}><Button type='primary'>Ask this user</Button></Link>}
							<Questions>
								{questions.reverse().map(question => (
									<Question
										question={question}
										refresh={this.refresh}
										username={username}
										key={question.id}
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
