import React from 'react';
import {
	Button,
	Form,
	Input,
	InputGroup,
} from '../components/Shared';


export default class CreatePoll extends React.Component {
	state = {
		opts: [
			{
				value: ''
			},
			{
				value: ''
			},
		]
	}

	removeOpt = (key) => {
		this.setState({
			opts: [
				...this.state.opts.slice(0, key),
				...this.state.opts.slice(key+1)
			]
		});
	}

	addOpt = () => {
		this.setState({
			opts: [
				...this.state.opts,
				{value: ''}
			]
		});
	}

	handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;

		let nextState = this.state;
		nextState.opts[key] = {value};

		this.setState(nextState);
	}

	render() {
		const { opts } = this.state;
		return(
			<Form>
				<Input type="text" name="name" placeholder="Title of the poll"/>
				{
					opts.map((opt, key) =>
						<InputGroup key={key}>
							<Input
								type="text"
								name={key}
								placeholder={"Option "+ (key+1)}
								value={opt.value}
								onChange={this.handleChange}
							/>
							<Button
								type="button"
								small
								nature="danger"
								onClick={() => this.removeOpt(key)}
								disabled={opts.length < 3}
							>
								x
							</Button>
						</InputGroup>
					)
				}
				<Button type="button" onClick={this.addOpt}>Add one more option (+)</Button>
				<Button type="submit" nature="primary">Save this poll</Button>
			</Form>
		);
	}
}

