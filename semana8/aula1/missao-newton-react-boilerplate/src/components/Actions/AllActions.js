export function addTask(text) {
	return {
		type: 'ADD_TASK',
		payload : {
			text: text,
			id: index,
		}
	}
}

export function deleteTask(id) {
	return {
		type: 'DELETE_TASK',
		payload: {
			id
		}
	}
}

export function checkTask(id) {
	return {
		type: 'CHECK_TASK',
		payload: {
			id
		}
		
	}
}

export function completeAllTasks() {
	return {
		type: 'COMPLETE_ALL_TASKS'
	}
}


export function deleteAllTasks() {
	return {
		type: 'DELETE_ALL_TASKS'
	}
}


export function setFilter (filter) {
  return {
    type: 'SET_FILTER',
    payload: {
			filter
		} 
  }
}

export const AllFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


