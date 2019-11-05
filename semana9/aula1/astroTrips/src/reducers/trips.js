const initialState = {
    trips: [],
    tripId: '',
    candidates: [],
};

const trips = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TRIPS":
            return { ...state, trips: action.payload.trips };
        case "SET_SELECTED_TRIP":
            return {...state, tripId: action.payload.tripId};
        default:
            return state;
    }
};

export default trips;