import React from 'react';
import styled from 'styled-components';
import { Ul, Li, Button, Input, InputGroup, Form } from './Shared';

export default class VotePoll extends React.Component {
	state = {

	}
	onSubmit = (e) => {
		e.preventDefault();
		this.props.newOpt(this.state.input)
	}
	vote = (name) => {

	}
	changeInput = (e) => {
		this.setState({ input: e.target.value })
	}
	render() {
		const { poll, authenticated, hasVoted } = this.props;
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
			<div >
				<p>Select one to vote or create a new option</p>
				<Ul>
					{poll.opts.map(opt =>
						<Li onClick={() =>this.vote(opt.name)}>
							{opt.name}
						</Li>
					)}
				</Ul>
				<form onSubmit={this.onSubmit} >
					<InputGroup>
						<Input
							placeholder="The name of a new option"
							onChange={this.changeInput}
						/>
						<Button small type="button" >+</Button>
					</InputGroup>
				</form>
			</div>
		);

	}
}
