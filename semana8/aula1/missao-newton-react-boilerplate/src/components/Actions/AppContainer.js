import React from 'react'
import TaskInput from '../TaskInput'
import ListItems from '../ListItems'
import Filters from '../Filters'

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			taskList: []
		}
	}

	render() {
		return (
		
			<div>
				<TaskInput />
				<ListItems taskList={this.state.taskList}/>
				<Filters />
			</div>
		)
	}
}