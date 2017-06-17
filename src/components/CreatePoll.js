//TODO: MIssing on Submit, at the moment it is not possible to pass opts and name as prop
import React from 'react';
import {
	StyledLink,
	Button,
	Form,
	Input,
	colors
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
		this.setState({
			...this.state.opts.slice(0, key),
			value: e.target.value,
			...this.state.opts.slice(key+1)
		})
	}

	render() {
		const { opts } = this.state;
		return(
			<Form>
				<Input type="text" name="name" placeholder="Title of the poll"/>
				{
					opts.map((opt, key) =>
						<div>
							<Input
								type="text"
								name={key}
								key={key}
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
						</div>
					)
				}
				<Button type="button" onClick={this.addOpt}>Add one more option (+)</Button>
				<Button type="submit" nature="primary">Save this poll</Button>
			</Form>
		);
	}
}

