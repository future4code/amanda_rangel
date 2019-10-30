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
	return state;
}

export default tasksReducer;