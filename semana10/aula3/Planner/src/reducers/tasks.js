const intialState = {
  tasks: [],
};

export const tasks = (state = intialState, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, tasks: action.payload.tasks };
    default:
      return state;
  }
};
export default tasks;