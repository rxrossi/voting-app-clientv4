import React from 'react';
import styled from 'styled-components';
import { StyledLink, Button, colors } from './Shared';

const blueBg = "#f5f5fd";

const Ul = styled.ul`
	list-style-type: none;
`;


const Li = styled.li`
	border-radius: 0.5em;
	border: 0.1em solid ${blueBg};
	height: 1.6em;
	margin: 0.1em;
	padding: 0.3em 0;
	clear: both;
	cursor: pointer;
	:hover {
		background: ${blueBg};
		// margin: 0 0.1em;
		border: 0;
	}
	> button {
		float: right;
	}
	> a {
		display: inline-block;
		padding: 0.3em 0.5em;
	}
`;

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
				<Button nature="danger" onClick={onDeleteClick}>Delete</Button> :
				''
		}
	</Li>
);
