import React from 'react';
export default ({ polls, authenticated }) => {
	if (polls.length) {
		return (
			<div>
				<p>Select one to vote or view results</p>
				<ul>
					{polls.map(poll =>
						<li>
							{poll.name}
							{
								authenticated ?
									<button>Delete</button> :
									''
							}
						</li>
					)}
				</ul>
			</div>
		);
	}

	return (
		<div>
			<p>No polls yet</p>
			{
				authenticated ?
					<button>Create one</button> :
					<button>Login to create one</button>
			}
		</div>
	)
}

const Options = ({ authenticated }) => {
	if (authenticated) {
		return (
			<div>
				<button>Delete</button>
			</div>
		);
	}
};
