import React from 'react';
import { Ul, Li, Button, Input } from './Shared';

export default ({ poll, authenticated, hasVoted }) => {
	if (hasVoted) {
		return (
			<Ul>
				{poll.opts.map(opt =>
					<Li>
						{opt.name} - {opt.votes}
					</Li>
				)}
			</Ul>
		);
	}
	return (
		<div>
			<p>Select one to vote or create a new option</p>
			<Ul>
				{poll.opts.map(opt =>
					<Li>
						{opt.name}
					</Li>
				)}
			</Ul>
			<Input placeholder="Name"/>
			<Button small type="button">+</Button>
		</div>
	);
}
