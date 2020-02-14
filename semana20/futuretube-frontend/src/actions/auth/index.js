import axios from "axios"
// import { push } from "connected-react-router"
// import { routes } from "../containers/Router"

const baseUrl = "https://us-central1-futuretube.cloudfunctions.net/app";

const setErrorMessage = message => ({
    type: "SET_ERROR_MESSAGE",
    payload: {
      message
    }
});

const clearErrorMessage = () => ({type: "CLEAR_ERROR_MESSAGE"});

export const login = (email,password) => async dispatch => {
  const data = {
    "email": email,
    "password": password
  };
  try {
    const res = await axios.post(`${baseUrl}/login`, data);
    localStorage.setItem('token', res.data.result.token);

    // dispatch(push(routes.feedPage))
  }
  catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

export const signUp = (name, email, dateOfBirth, picture, password) =>  async (dispatch) => {
  try {
    const data = {
      name,
      email,
      dateOfBirth,
      picture,
      password,
    };

    const response = await axios.post( `${baseUrl}/signUp`,
     data
    );
  window.localStorage.setItem ("token", response.data.result.token);
  } catch (e) {
    console.log(e.message)
  }
};

