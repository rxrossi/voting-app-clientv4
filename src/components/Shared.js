import React from 'react';
import styled from 'styled-components';

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

