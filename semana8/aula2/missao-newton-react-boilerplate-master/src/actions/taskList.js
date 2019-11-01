import {ADD_TASK, UPDATE_TASK_TEXT, DELETE_TASK, CHECK_TASK, CHECK_ALL_TASKS, DELETE_ALL_TASKS} from '../constants/actionTypes'


export const addTask = (text, id) => {
	return {
		type: ADD_TASK,
		payload : {
			id: Date.now(),
		}
	}
}

export const updateTaskText = (newText) => ({
	type: UPDATE_TASK_TEXT,
	payload: { 
		newText: newText,
	}
})

export const deleteTask = (id) => {
	return {
		type: DELETE_TASK,
		payload: {
			id: id,
		}
	}
}

export const checkTask = (id) => {
	return {
		type: CHECK_TASK,
		payload: {
			id: id,
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