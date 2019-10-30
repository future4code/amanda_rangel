import {ADD_TASK, DELETE_TASK, CHECK_TASK, CHECK_ALL_TASKS, DELETE_ALL_TASKS} from '../constants/actionTypes'

let taskListId = 0;

export const addTask = (text) => {
	return {
		type: ADD_TASK,
		payload : {
			text: text,
			id: taskListId++,
			checked: false
		}
	}
}

export const deleteTask = (id) => {
	return {
		type: DELETE_TASK,
		payload: {
			id
		}
	}
}

export const checkTask = (id) => {
	return {
		type: CHECK_TASK,
		payload: {
			id,
		}
		
	}
}

export const checkAllTasks = () => {
	return {
		type: CHECK_ALL_TASKS
	}
}

export const deleteAllTasks = () => {
	return {
		type: DELETE_ALL_TASKS
	}
}