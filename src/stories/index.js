import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PollsList from '../components/PollsList';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import CreatePoll from '../components/CreatePoll';
import VotePoll from '../components/VotePoll';
import { Button } from '../components/Shared';

const polls = [
	{
		_id: '1234',
		name: 'Best salad'
	},
	{
		_id: '1235',
		name: 'Best superhero',
		opts: [
			{
				name: 'Spongebob',
				votes: 10,
			},
			{
				name: 'Batman',
				votes: 1,
			},
			{
				name: 'Superman',
				votes: 5,
			},
		]
	},
	{
		_id: '1236',
		name: 'Best TV serie'
	},
];

const fakeFn = (arg) => console.log(arg) ;

const PollsListDefaultProps = {
	onDeleteClick: fakeFn
}

storiesOf('PollsList', module)
	.addDecorator(story =>
		<MemoryRouter>
			{story()}
		</MemoryRouter>
	)
	.add('authenticated with no content', () =>
		<PollsList polls={[]} authenticated={true} ownPolls={true} {...PollsListDefaultProps}/>

	)
	.add('viewring own polls', () =>
		<PollsList polls={polls} ownPolls={true} {...PollsListDefaultProps}/>
	)
	.add('not authenticated with no content', () =>
		<PollsList polls={[]} ownPolls={false} {...PollsListDefaultProps}/>
	)
	.add('not authenticated with a list of polls', () =>
		<PollsList polls={polls} ownPolls={false} {...PollsListDefaultProps}/>
	)

storiesOf('Button', module)
	.add('default, danger and primary', () => (
		<div>
			<div style={{padding: "5px"}}><Button nature="default">Default</Button></div>
			<div style={{padding: "5px"}}><Button nature="primary">Primary</Button></div>
			<div style={{padding: "5px"}}><Button nature="danger">Danger</Button></div>
		</div>
	))

storiesOf('LoginForm', module)
	.addDecorator(story =>
		<MemoryRouter>
			{story()}
		</MemoryRouter>
	)
	.add('empty fields', () => <LoginForm createAnAccRoute="/createacc"/>)

storiesOf('RegisterForm', module)
	.addDecorator(story =>
		<MemoryRouter>
			{story()}
		</MemoryRouter>
	)
	.add('empty fields', () => <RegisterForm loginRoute="/login"/>)

storiesOf('CreatePoll', module)
	.add('empty fields', () => <CreatePoll />)

storiesOf('VotePoll', module)
	.add('default', () => <VotePoll poll={polls[1]}/>)
	.add('has voted', () => <VotePoll poll={polls[1]} hasVoted={true}/>)

// import Button from './Button';
// import Welcome from './Welcome';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
