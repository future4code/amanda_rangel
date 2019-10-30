import React from 'react'
import styled from 'styled-components'
import { TasksInput } from './taskList/TasksInput'
import { TaskListItem } from './taskList/TaskListItem'
import { Footer } from './taskList/Footer'
import Card from '@material-ui/core/Card';
import 'typeface-roboto';


const CardStyled = styled(Card)`
	width: 80vw;
	padding: 20px;
	margin: auto;
	margin-top: 30px;
	display: grid;
	justify-items: center;
`

const Title = styled.h1`
	font-family: Roboto;
	text-align: center;
	font-size: 50px;
	color: #c96026;
	opacity: 0.8;

`


export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div>
				<Title>4Task</Title>
				<CardStyled>
					<TasksInput />
					<TaskListItem /> 
					<Footer />
				</CardStyled>
			</div>
		)
	}
}