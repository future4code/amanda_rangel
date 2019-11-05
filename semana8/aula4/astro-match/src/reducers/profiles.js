const initialState = {
  
}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE_SWIPE":
      return { ...state, profile: action.payload.profile };
  }
  return state
}

export default profiles
