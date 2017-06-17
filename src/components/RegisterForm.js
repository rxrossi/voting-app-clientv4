import React from 'react';

import {
	StyledLink,
	Button,
	Form,
	Input,
	colors
} from '../components/Shared';


export default ({loginRoute}) => {
	return(
		<Form>
			<Input type="email" name="email" placeholder="Email"/>
			<Input type="password" name="password" placeholder="Password"/>
			<Input type="password" name="confirmPassword" placeholder="Confirm password"/>
			<Button type="submit" nature="primary">Create an account</Button>
			<StyledLink small to={loginRoute}>
				Have an account? Click Here
			</StyledLink>
		</Form>
	);
}
