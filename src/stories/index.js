import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PollsList from '../components/PollsList';

const polls = [
	{
		_id: '1234',
		name: 'Best salad'
	},
	{
		_id: '1235',
		name: 'Best superhero'
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
		<PollsList polls={[]} authenticated={true} {...PollsListDefaultProps}/>

	)
	.add('authenticated with a list of polls', () =>
		<PollsList polls={polls} authenticated={true} {...PollsListDefaultProps}/>
	)
	.add('not authenticated with no content', () =>
		<PollsList polls={[]} authenticated={false} {...PollsListDefaultProps}/>
	)
	.add('not authenticated with a list of polls', () =>
		<PollsList polls={polls} authenticated={false} {...PollsListDefaultProps}/>
	)

// import Button from './Button';
// import Welcome from './Welcome';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
