import styled from 'styled-components';
import { Link } from 'react-router-dom';

const margin = "margin: 5px 0";
const width = "width: 300px;";
const padding = "padding: 0.1rem 0;";

export const InputGroup = styled.div`
	> input {
		width: 273px;
	}
`;

export const colors = {
	mainBlue: "#33a",
	mainBlueHover: "#009",
	blueBg: "#f5f5fd",
};

const btnCol = {
	default: {
		bg: "#069",
		bgHover: "#17a",
		fg: "#fff"
	},
	primary: {
		bg: "#39f",
		bgHover: "#4af",
		fg: "white"
	},
	danger: {
		bg: "#d33",
		bgHover: "#e44",
		fg: "white"
	},
}

export const Ul = styled.ul`
	list-style-type: none;
	padding: 0;
`;


export const Li = styled.li`

	padding: 0.3em 0;
	clear: both;
	cursor: pointer;
	color: ${colors.mainBlue};
	${width}
	:hover {
		background: ${colors.blueBg};
		color: ${colors.mainBlueHover};
	}
	> button {
		float: right;
	}
	> a {
		display: inline-block;
		padding: 0.3em 0.5em;
	}
`;;

export const StyledLink = styled(Link)`
	font-size: ${props => props.small ? '0.7rem' : '1rem'};
	text-decoration: none;
	outline: 0;
	color: ${colors.mainBlue};
	:hover {
		color: ${colors.mainBlueHover}
	}
`;

export const Form = styled.form`
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
		// border-radius: 0;
	}
	> input {
		${padding};
		${margin};
	}
	> ${StyledLink} {
		${width};
		${padding};
		text-align: right;
	}
`;

export const Input = styled.input`
	border: none;
	${width}
	border-bottom: 1px solid ${colors.mainBlue};
	color: ${colors.mainBlue}
`;



export const Button = styled.button`
	background: ${props => btnCol[props.nature].bg};
	color: ${props => btnCol[props.nature].fg};
	:hover {
		background: ${props => btnCol[props.nature].bgHover}
	}
	:disabled {
		background: #777;
		color: #aaa;
	}
	cursor: pointer;
	padding: ${props => props.small ? '1px 0.5em' : '0.2em 1.0em'};
	// padding: 0.2em 1.0em;
	// border-radius: ${props => props.small ? '0 0.2em 0.2em 0' : '0.2em'};
	border: none;
	border-bottom: ${props => props.small ? '1px solid blue' : 'none'};
`;

Button.defaultProps = {
	nature: 'default'
};

