import axios from "axios";
import { baseURL } from "../../api/constants"

export const setTasks = tasks => ({
  type: "SET_TASKS",
  payload: {
    tasks
  }
});

export const createNewTask = (text, day) => async(dispatch) => {
  const task = {text, day};
  const response = await axios.post(baseURL, task);

  if(response.status === 200) {
    dispatch(fetchAllTasks());
  }
};

export const fetchAllTasks = () => async dispatch => {
  const response = await axios.get(baseURL);
  dispatch(setTasks(response.data));
};