import axios from "axios";

export const setTrips = (trips) => ({
  type: "SET_TRIPS",
  payload: {
    trips
  }
});

export const fetchTrips= () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/futureX/amanda/trips"
  );

  dispatch(setTrips(response.data.trips));
};

export const setSelectedTrip = (tripId) => ({
  type: "SET_SELECTED_TRIP",
  payload: {
    tripId: tripId,
  }
});

export const getTripDetails = (tripId) => async (dispatch, getState) => {
  const response = await axios.get(
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/amanda/trip/${tripId}`
  );

  dispatch(setSelectedTrip(response.data.trip));
};