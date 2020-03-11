const initialState = {
  loginError: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ERROR_MESSAGE":
      return { ...state, loginError: true };
    case "CLEAR_ERROR_MESSAGE":
      return { ...state, loginError: false };
    default:
      return state;
  }
};

export default auth;



