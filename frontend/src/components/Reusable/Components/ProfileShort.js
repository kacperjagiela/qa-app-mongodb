import * as React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { ShortProfile } from '../../Styles';
import { serverIp } from '../services';


const ProfileShort = ({ user }) => (
	<ShortProfile>
		<Avatar size='large' src={`${serverIp}/public/${user.username}`} />
		<Link to={`/profile/${user.username}`}>{user.username}</Link>
	</ShortProfile>
);

export default ProfileShort;
