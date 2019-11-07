import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import axios from "axios";


const setErrorMessage = message => {
  return {
    type: "SET_ERROR_MESSAGE",
    payload: {
      message
    }
  };
};

const clearErrorMessage = () => {
  return {
    type: "CLEAR_ERROR_MESSAGE"
  };
};

export const authenticateLogin = (email, password) => async dispatch => {
  try {
    dispatch(clearErrorMessage());
    const response = await axios.post(
      "https://us-central1-missao-newton.cloudfunctions.net/futureX/amanda/login",
      {
        email,
        password
      }
    );
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.tripsList));
  } catch (e) {
     dispatch(setErrorMessage());
  }
};