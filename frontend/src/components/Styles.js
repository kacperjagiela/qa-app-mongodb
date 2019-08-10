import styled, { keyframes } from 'styled-components';
import {
	fadeInRight, zoomIn, slideInDown, fadeIn,
} from 'react-animations';
import { Layout } from 'antd';

export const FadeInRight = styled.div`
	width: 100%;
	heigth: 100%;
	border-radius: 10px;
	text-align: center;
	padding-top: 5vh;
	paddint-bottom: 5vh;
	animation: 1.5s
		${keyframes`${fadeInRight}`};
`;

export const LayoutStyled = styled(Layout)`
	min-height: 100vh;
	width: 100%;
	padding-left: 20%;
	padding-right: 20%;
	overflow: auto;
	animation: 0.5s
		${keyframes`${fadeIn}`};
`;

export const LoginDiv = styled.div`
	font-family: 'Roboto',
		sans-serif;
	width: 100vw;
	height: 100vh;
	background-color: transparent;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation: 1.2s
		${keyframes`${zoomIn}`};
`;

export const Profilepic = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;

	@media screen and (max-width: 768px) {
		width: 100px;
		height: 100px;
	}
`;

export const Register = styled.div`
	font-family: 'Roboto',
		sans-serif;
	width: 100%;
	height: 100vh;
	padding-left: 20%;
	padding-right: 20%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation: 1.2s
		${keyframes`${fadeIn}`};

	@media screen and (max-width: 480px) {
		padding-top: 5vh;
		display: block;
		padding-left: 10%;
		padding-right: 10%;
		margin-left: 0;
	}
`;

export const Trigger = styled.div`
	width: 30px;
	height: 45px;
	position: absolute;
	top: 50px;
	left: 0px;
	z-index: 3001;

	@media screen and (max-width: 767) {
		right: 0px;
	}
`;

export const ShortProfile = styled.div`
	width: 80%;
	margin-left: 10%;
`;

export const SearchDiv = styled.div`
	width: 80%;
	margin-left: 10%;
`;

export const QuestionDiv = styled.div`
	width: 100%;
	padding: 10px;
	margin-top: 2vh;
	min-height: 3vh;
	border-bottom: 1px
		solid
		#1890ff;
	overflow: auto;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const Questions = styled.div`
	width: 100%;
	margin-top: 20px;
	border-top: 1px
		solid
		#1890ff;
	animation: 1.2s
		${keyframes`${fadeIn}`};

	@media screen and (max-width: 768px) {
		margin-top: 80px;
	}
`;

export const Welcome = styled.div`
	font-family: 'Roboto',
		sans-serif;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation: 1.3s
		${keyframes`${slideInDown}`};
`;
