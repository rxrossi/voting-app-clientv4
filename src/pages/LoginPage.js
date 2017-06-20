import React from 'react';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {
	render () {
		return (
			<div>
				<h1>Login Page</h1>
				<LoginForm  createAnAccRoute="/register" />
			</div>
		);
	}
}

export default LoginPage;
