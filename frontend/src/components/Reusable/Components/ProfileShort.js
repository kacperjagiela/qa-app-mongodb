import * as React from 'react';
import { Avatar } from 'antd';
import { ShortProfile } from '../../Styles';
import { serverIp } from '../services';

const ProfileShort = ({ user }) => (
	<ShortProfile>
		<Avatar size='large' src={`${serverIp}/public/${user.username}`} />
		<a href={`/qa-app-mongodb/profile/${user.username}`}>{user.username}</a>
	</ShortProfile>
);

export default ProfileShort;
