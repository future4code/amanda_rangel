import {ADD_TASK, UPDATE_TASK_TEXT, DELETE_TASK, CHECK_TASK, CHECK_ALL_TASKS, DELETE_ALL_TASKS} from '../constants/actionTypes'
import { awaitExpression } from '@babel/types'

const initialState = {
	tasks: [],
	currentTaskText: '',
} 

const tasksReducer = (state = initialState, action) => {
	console.log(action)
	switch(action.type) {
		case ADD_TASK:
			const newTask = {   	
				text: state.currentTaskText,
				id: action.payload.id,
				done: false
			};
			const newTasks = [...state.tasks, newTask];
			return {...state, tasks: newTasks, currentTaskText: ''}
		case UPDATE_TASK_TEXT:
			return {...state, currentTaskText: action.payload.newText}
		case CHECK_TASK:
			const indexToEdit = state.tasks.findIndex(task => task.id === action.payload.id)
			const newAllTasks = [...state.tasks];
			newAllTasks[indexToEdit].done = true;
			return {...state, tasks: newAllTasks };
			
		case DELETE_TASK:
			const indexToRemove = state.tasks.findIndex((task) => task.id === action.payload.id)
			const notDeletedTasks = [...state.tasks]
			notDeletedTasks.splice(indexToRemove, 1)
			return {...state, tasks: notDeletedTasks }		
			
		default:
			return state
	}

}

export default tasksReducer;