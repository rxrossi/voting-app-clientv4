import React from 'react';
import RegisterForm from '../components/RegisterForm';

class RegisterPage extends React.Component {
	render () {
		return (
			<div>
				<RegisterForm loginRoute="/login"/>
			</div>
		);
	}
}

export default RegisterPage;
