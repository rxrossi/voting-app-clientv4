import React from 'react';
import styled from 'styled-components';
import { StyledLink, Button, colors } from '../components/Shared';

const margin = "margin: 5px 0";
const width = "width: 200px;";
const padding = "padding: 0.1rem 0;";

const Form = styled.form`
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	> button {
		${width}
		${margin};
		${padding};
		border-radius: 0;
	}
	> input {
		${padding};
		${width}
		${margin};
	}
	> ${StyledLink} {
		${width};
		${padding};
		text-align: right;
	}
`;

const Input = styled.input`
	border: none;
	border-bottom: 1px solid ${colors.mainBlue};
	color: ${colors.mainBlue}
`;

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
