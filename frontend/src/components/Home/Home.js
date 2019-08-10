import * as React from 'react';
import {
	Layout, Input, Typography, AutoComplete, Button, Icon, Avatar, Comment,
} from 'antd';
import { Link } from 'react-router-dom';
import { getLatestQuestions, getAllUsernames, serverIp } from '../Reusable/services';
import { QuestionDiv, Questions, LayoutStyled } from '../Styles';
import Loading from '../Reusable/Components/Loading';

const { Content, Footer } = Layout;

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ready: false,
			questions: [],
			users: [],
			allUsers: [],
			searchPhrease: '',
		};
		this.latestQuestions();
		this.loadAllUsers();
		setTimeout(() => this.setState({
			ready: true,
		}), 1000);
	}

	latestQuestions = async () => {
		await getLatestQuestions().then((res) => {
			this.setState({
				questions: res.data.questions,
				users: res.data.users,
			});
		});
	}

	loadAllUsers = async () => {
		await getAllUsernames().then((res) => {
			let usernames = [];
			const getUsernames = new Promise((resolve) => {
				usernames = res.data.usernames.map(user => user.username);
				resolve('ok');
			});
			getUsernames.then((result) => {
				if (result) {
					this.setState({
						allUsers: usernames,
					});
				}
			});
		});
	}

	onSelect = (value) => {
		const { history } = this.props;
		history.push(`/profile/${value}`);
	}

	onChange = (value) => {
		this.setState({
			searchPhrease: value,
		});
	}

	handleSearch = () => {
		const { history } = this.props;
		const { searchPhrease } = this.state;
		history.push(`/search/${searchPhrease}`);
	}

	render() {
		const {
			questions, users, allUsers, ready,
		} = this.state;
		return (
			ready ? (
				<LayoutStyled>
					<Content style={{
						width: '100%', height: '95vh', paddingTop: '5vh',
					}}
					>
						<Typography.Title level={3} style={{ marginTop: '10%', textAlign: 'center' }}>
							Search for anyone!
						</Typography.Title>
						<AutoComplete
							className='global-search'
							size='large'
							style={{ width: '100%' }}
							dataSource={allUsers}
							onSelect={this.onSelect}
							onSearch={this.onChange}
							placeholder='Search for user...'
							filterOption={(inputValue, option) => (
								option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
							)}
						>
							<Input
								suffix={(
									<Button
										className='search-btn'
										style={{ marginRight: -12 }}
										size='large'
										type='primary'
										onClick={this.handleSearch}
									>
										<Icon type='search' />
									</Button>
								)}
							/>
						</AutoComplete>
						<Typography.Title level={3} style={{ marginTop: '10vh', textAlign: 'center' }}>
							Some random QA&apos;s
						</Typography.Title>
						<Questions>
							{questions.map((question) => {
								if (question) {
									let currentUsername = '';
									users.forEach((user) => {
										if (user.id === question.user_id) {
											currentUsername = user.username;
										}
									});
									return (
										<QuestionDiv key={question.id}>
											<Comment
												avatar={(
													<Link to={`/profile/${question.asked_by}`}>
														<Avatar icon='user' size='large' src={`${serverIp}/public/${question.asked_by}`} />
													</Link>
												)}
												author={(
													<Link to={`/profile/${question.asked_by}`}>
														{question.asked_by}
													</Link>
												)}
												content={
													question.content
												}
											>
												<Comment
													avatar={(
														<Link to={`/profile/${currentUsername}`}>
															<Avatar icon='user' size='large' src={`${serverIp}/public/${currentUsername}`} />
														</Link>
													)}
													author={(
														<Link to={`/profile/${currentUsername}`}>
															{currentUsername}
														</Link>
													)}
													content={
														question.answer
													}
												/>
											</Comment>
										</QuestionDiv>
									);
								}
								return null;
							})}
						</Questions>
						<Footer style={{ width: '100%', textAlign: 'center' }}>
							Created by Kacper Jagieła
						</Footer>
					</Content>
				</LayoutStyled>
			) : <Loading />
		);
	}
}
