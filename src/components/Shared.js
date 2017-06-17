import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
};

export const colors = {
	mainBlue: "#33a",
	mainBlueHover: "#009",
};

export const StyledLink = styled(Link)`
	font-size: ${props => props.small ? '0.7rem' : '1rem'};
	text-decoration: none;
	outline: 0;
	color: ${colors.mainBlue};
`;

export const Button = styled.button`
	background: ${props => btnCol[props.nature].bg};
	color: ${props => btnCol[props.nature].fg};
	:hover {
		background: ${props => btnCol[props.nature].bgHover}
	}
	cursor: pointer;
	padding: 0.2em 1.0em;
	border-radius: 0.2em;
	border: none;
`;

Button.defaultProps = {
	nature: 'default'
};

