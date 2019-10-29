import React from 'react';
import styled from 'styled-components';

const Tasks = styled.ul``

export class ListItems extends React.Component {
	constructor (props) {
		super (props)
	}
	render () {
		const allTasks = this.props.taskList.map((item) => {
			return (
				<Tasks>
					<li>{item}</li>
				</Tasks>
			)
		})
		return (
			<div>
				{allTasks}
			</div>
		)
	}
	
}