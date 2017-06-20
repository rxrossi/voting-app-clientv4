import React from 'react';
import { StyledLink, Button, Ul, Li } from './Shared';

export default ({ polls, ownPolls, onDeleteClick, authenticated }) => {
	if (polls.length) {
		return (
			<div>
				<p>Select one to vote or view results</p>
				<Ul>
					{polls.map(poll =>
						<ListItem
							linkTo={"/polls"+poll._id}
							name={poll.name}
							key={poll.name}
							onDeleteClick={() => onDeleteClick(poll._id)}
							ownPolls={ownPolls}
						/>
					)}
				</Ul>
			</div>
		);
	}

	return (
		<div>
			<p>No polls yet</p>
			{
				authenticated ?
					<Button>Create one</Button> :
					<Button>Login to create one</Button>
			}
		</div>
	)
}

const ListItem = ({ ownPolls, name, linkTo, onDeleteClick }) => (
	<Li>
		<StyledLink to={linkTo}>
			{name}
		</StyledLink>
		{
			ownPolls ?
				<Button nature="danger" onClick={onDeleteClick} >X</Button> :
				''
		}
	</Li>
);
