import React from 'react';
import PollsList from '../components/PollsList';
import { StyledLink } from '../components/Shared';

class UserHome extends React.Component {
	render () {
		const polls = [
			{
				name: 'First poll'
			},
			{
				name: '2nd poll'
			},
		];
		return (
			<div>
				<h1>User</h1>
				<PollsList polls={polls} ownPolls={true}/>
				<StyledLink to="/createpoll">Create a Poll</StyledLink>
			</div>
		);
	}
}

export default UserHome;
