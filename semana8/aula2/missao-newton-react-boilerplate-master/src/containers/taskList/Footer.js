import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`
const ButtonStyled = styled(Button)`
	width: 10vw;
	font-size: 10px;
	background-color: #c96026;
	opacity: 0.8;
	color: white;
	font-weight: bold;
	&:hover {
		background-color: #333;
	}
`

export class Footer extends React.Component {
	constructor () {
		super()
	}

	render() {
		return (
			<FooterContainer>
				<ButtonStyled variant="outlined"> Marcar todas como completas</ButtonStyled>
				<ButtonStyled variant="contained">Todas</ButtonStyled>
				<ButtonStyled variant="contained">Pendentes</ButtonStyled>
				<ButtonStyled variant="contained">Completas</ButtonStyled>
				<ButtonStyled variant="outlined">Remover completas</ButtonStyled>
			</FooterContainer>
		)
	}
}