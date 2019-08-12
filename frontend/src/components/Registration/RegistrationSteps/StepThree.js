import * as React from 'react';
import {
	Typography, Form, Icon, Input, Button,
} from 'antd';
import { FadeInRight } from '../../Styles';

const { Title, Paragraph } = Typography;
const FormItem = Form.Item;
const { TextArea } = Input;

const StepThreeForm = ({ onSubmit, prevStep }) => (
	<FadeInRight>
		<Form onSubmit={onSubmit}>
			<Title>Last step!</Title>
			<Title level={3}>Add something from yourself!</Title>
			<Paragraph>(optional, can be changed later)</Paragraph>
			<FormItem label='Description' hasFeedback>
				<TextArea prefix={<Icon type='idcard' />} style={{ width: '50%' }} placeholder='Description' autosize />
			</FormItem>
			<Button onClick={prevStep}>Previous</Button>
			<Button type='primary' htmlType='submit'>Done</Button>
		</Form>
	</FadeInRight>
);

const StepThree = Form.create()(StepThreeForm);
export default StepThree;
