import React from 'react';
import PollsList from '../components/PollsList';

class ViewPolls extends React.Component {
	render() {
		return (
			<div>
				<h1>List of Polls</h1>
				<PollsList polls={[]}/>
			</div>
		);
	}
}

export default ViewPolls;
