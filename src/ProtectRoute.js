import React from 'react';
import { Redirect } from 'react-router-dom';

export default (isAuthenticated) => (component) => {
	if (isAuthenticated) {
		return component;
	} else {
		console.log({isAuthenticated}, Redirect);
		return (
			<div>
				<Redirect to="/login" />
			</div>
		);
	}
}
