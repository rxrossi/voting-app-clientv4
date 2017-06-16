import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const primaryBg = "#f5f5fd";

const linkColor = "#33a" ;
const linkHoverColor = "#009"

const buttonDangerPrimary = "#d33"

const Ul = styled.ul`
	list-style-type: none;
`;

const Button = styled.button`
	background: ${props => props.danger ? buttonDangerPrimary : '#39f'};
	:hover {
		background: #f00;
	}
	color: #fff;
	cursor: pointer;
	padding: 0.2em 1.0em;
	border-radius: 0.2em;
	border: none;
`;

const Li = styled.li`
	border-radius: 0.5em;
	border: 0.1em solid ${primaryBg};
	height: 1.6em;
	margin: 0.1em;
	padding: 0.3em 0;
	clear: both;
	cursor: pointer;
	:hover {
		background: ${primaryBg};
		// margin: 0 0.1em;
		border: 0;
		> a {
			color: ${linkHoverColor};
		}
	}
	> button {
		float: right;
	}
	> a {
		display: inline-block;
		padding: 0.3em 0.5em;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	outline: 0;
	color: ${linkColor};
`;


export default ({ polls, authenticated, onDeleteClick }) => {
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
							authenticated={authenticated}
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

const ListItem = ({ authenticated, name, linkTo, onDeleteClick }) => (
	<Li>
		<StyledLink to={linkTo}>
			{name}
		</StyledLink>
		{
			authenticated ?
				<Button danger onClick={onDeleteClick}>Delete</Button> :
				''
		}
	</Li>
);
