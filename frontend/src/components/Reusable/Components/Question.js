/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
	Input, Button, Form, Avatar, Typography, Comment,
} from 'antd';
import { answerQuestion, serverIp, deleteQuestion } from '../services';
import { QuestionDiv } from '../../Styles';
import { getCookie } from '../cookies';

class Question extends React.Component {
	constructor(props) {
		super(props);
		const { question } = this.props;
		this.state = {
			answer: question.answer,
		};
	}

	onChange = (e) => {
		this.setState({
			answer: e.target.value,
		});
	}

	handleAnswer = (e) => {
		e.preventDefault();
		const { question, refresh } = this.props;
		const { answer } = this.state;
		answerQuestion(question._id, answer);
		refresh();
	}

	handleDelete = () => {
		const { question, refresh } = this.props;
		deleteQuestion(question._id);
		refresh();
	}

	render() {
		const { question, username } = this.props;
		const { answer } = this.state;
		return (
			<QuestionDiv style={{ position: 'relative' }}>
				<Form onSubmit={this.handleAnswer}>
					<Comment
						avatar={(
							<Link to={`/profile/${question.asked_by}`}>
								<Avatar icon='user' size='large' src={`${serverIp}/public/${question.asked_by}`} />
							</Link>
						)}
						author={<Link to={`/profile/${question.asked_by}`}>{question.asked_by}</Link>}
						content={(
							question.content
						)}
					>
						{
							question.answer
								? (
									<Comment
										avatar={(
											<Link to={`/profile/${username}`}>
												<Avatar icon='user' size='large' src={`${serverIp}/public/${username}`} />
											</Link>
										)}
										author={<Link to={`/profile/${username}`}>{username}</Link>}
										content={(
											<Typography.Paragraph>
												{question.answer}
											</Typography.Paragraph>
										)}
									/>
								)
								: (
									<div>
										{
											username === getCookie('login')
												? <Input onChange={e => this.onChange(e)} placeholder="Answer" />
												: null
										}
									</div>
								)
						}
						{
							answer && !question.answer
								? <Button type='primary' htmlType='submit' style={{ float: 'right', marginTop: '5px' }}>Answer!</Button>
								: null
						}
						{
							username === getCookie('login')
								? (
									<Button
										style={{
											position: 'absolute',
											top: '5px',
											right: '10px',
											cursor: 'pointer',
											zIndex: 1,
										}}
										type='primary'
										onClick={() => this.handleDelete()}
									>
										Delete
									</Button>
								)
								: null
						}
					</Comment>
				</Form>
			</QuestionDiv>
		);
	}
}

export default Question;
