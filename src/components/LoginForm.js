import React from 'react';
import {
	StyledLink,
	Button,
	Form,
	Input,
	colors
} from '../components/Shared';


export default ({createAnAccRoute}) => {
	return(
		<Form>
			<Input type="email" name="email" placeholder="Email"/>
			<Input type="password" name="password" placeholder="Password"/>
			<Button type="submit" nature="primary">Login</Button>
			<StyledLink small to={createAnAccRoute}>Create an account</StyledLink>
		</Form>
	);
}
