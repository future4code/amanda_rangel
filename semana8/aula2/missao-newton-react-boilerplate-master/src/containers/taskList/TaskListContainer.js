import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TaskListItem from './TaskListItem'
import { connect } from 'react-redux';


class TaskListContainer extends React.Component {
	constructor () {
		super()
	}

	
	render() {
		return this.props.tasks.map(task => <TaskListItem task={task}/>)
	}
}
const mapStateToProps = (state) => {
	return {
		tasks: state.tasks.tasks
	}
}


export default connect(mapStateToProps)(TaskListContainer);