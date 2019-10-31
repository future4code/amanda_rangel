import {ADD_TASK, DELETE_TASK, CHECK_TASK, CHECK_ALL_TASKS, DELETE_ALL_TASKS} from '../constants/actionTypes'
import { awaitExpression } from '@babel/types'

const initialState = [
		{
			id: 1,
			text: 'task1',
			checked: false
		},
		{
			id: 2,
			text: 'task2',
			checked: true
		}
]

const tasksReducer = (state = initialState, action) => {
	console.log(action)
	switch(action.type) {
		case ADD_TASK:
			const newTask = {
				text: action.payload.text,
				id: action.payload.id,
				checked: action.payload.ckecked,
				deleted: action.payload.deleted
			}
			return [newTask,...state]
		default:
			return state
		case CHECK_TASK:
			const newState = state.map(task => {
				if(task.id === action.payload.id) {
					return {
						...task, 
						checked: !task.checked};
				}
				return task;
			})
			return newState;
		case DELETE_TASK:
			const taskToDelete = state.map(task => {
				if(task.id === action.payload.id) {
					return {
						...task, 
						deleted: !task.deleted};
				}
				return task;
			})
			return taskToDelete;
	}
		return state;
}

export default tasksReducer;