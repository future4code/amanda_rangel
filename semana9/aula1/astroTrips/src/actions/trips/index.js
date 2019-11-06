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

export const addCandidate = (name, profession, applicationText, age, country) => ({
  type: "ADD_CANDIDATE",
  payload: {
    name,
    profession,
    applicationText,
    age,
    country,
  }
});

export const postTripCandidate = (name, age, applicationText, profession, country, tripId) =>  async (dispatch) => {
    const data = {
      name:name, 
      age:age, 
      applicationText: applicationText, 
      profession: profession, 
      country: country, 
      tripId: tripId
    }
    const response = await axios.post(
      `https://us-central1-missao-newton.cloudfunctions.net/futureX/amanda/trips/${tripId}/apply`,
      data
    ); 
  };