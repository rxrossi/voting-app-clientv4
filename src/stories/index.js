import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PollsList from '../components/PollsList';

const polls = [
	{
		name: 'Best salad'
	},
	{
		name: 'Best superhero'
	},
	{
		name: 'Best TV serie'
	},
];

storiesOf('PollsList', module)
	.add('authenticated with no content', () =>
		<PollsList polls={[]} authenticated={true}/>

	)
	.add('authenticated with a list of polls', () =>
		<PollsList polls={polls} authenticated={true}/>
	)
	.add('not authenticated with no content', () =>
		<PollsList polls={[]} authenticated={false}/>

	)
	.add('not authenticated with a list of polls', () =>
		<PollsList polls={polls} authenticated={false}/>
	)

// import Button from './Button';
// import Welcome from './Welcome';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
