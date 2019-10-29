import React from 'react';
import styled from 'styled-components';


const Input = styled.input `

`

export class TaskInput extends React.Component {
	constructor () {
		super ()
		this.state = {
			taskValue: '',
		}
	}

	handleInputChange = (event) => {
		this.setState({taskValue: event.target.value});
	}

	render () {
		return (
			<div>
				<Input 
				type='text' 
				value={this.state.taskValue} 
				onChange={this.handleInputChange}/>
			</div>
		)
	}
	
}