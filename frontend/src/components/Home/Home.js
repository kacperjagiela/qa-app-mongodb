/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import {
	Layout, Input, Typography, AutoComplete, Button, Icon, Avatar, Comment,
} from 'antd';
import { getLatestQuestions, getAllUsernames, serverIp } from '../Reusable/services';
import { QuestionDiv, Questions } from '../Styles';

const { Content, Footer } = Layout;

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			users: [],
			allUsers: [],
			searchPhrease: '',
		};
		const { refresh, history } = this.props;
		if (history.location.state) {
			refresh();
			history.location.state = undefined;
		}
		this.latestQuestions();
		this.loadAllUsers();
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
		await getAllUsernames().then(async (res) => {
			console.log(res.data.usernames);
			let usernames = [];
			const getUsernames = new Promise((resolve) => {
				usernames = res.data.usernames.map(user => user.username);
				resolve('ok');
			});
			await getUsernames.then((result) => {
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
		const { questions, users, allUsers } = this.state;
		return (
			<Layout style={{
				minHeight: '100vh', width: '100%', paddingLeft: '10%', paddingRight: '10%', overflow: 'auto',
			}}
			>
				<Content>
					<Typography.Title level={3} style={{ marginTop: '10%', textAlign: 'center' }}>
						Search for anyone!
					</Typography.Title>
					<AutoComplete
						className='global-search'
						size='large'
						style={{ width: '60%', marginLeft: '20%' }}
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
						{ questions.map((question) => {
							console.log(questions);
							if (question) {
								let currentUsername = '';
								users.forEach((user) => {
									if (user._id === question.user_id) {
										currentUsername = user.username;
									}
								});
								return (
									<QuestionDiv key={question._id}>
										<Comment
											avatar={(
												<a href={`/profile/${question.asked_by}`}>
													<Avatar icon='user' size='large' src={`${serverIp}/public/${question.asked_by}`} />
												</a>
											)}
											author={(
												<a href={`/profile/${question.asked_by}`}>
													{question.asked_by}
												</a>
											)}
											content={
												question.content
											}
											key={
												question._id
											}
										>
											<Comment
												avatar={(
													<a href={`/profile/${currentUsername}`}>
														<Avatar icon='user' size='large' src={`${serverIp}/public/${currentUsername}`} />
													</a>
												)}
												author={(
													<a href={`/profile/${currentUsername}`}>
														{currentUsername}
													</a>
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
			</Layout>
		);
	}
}
