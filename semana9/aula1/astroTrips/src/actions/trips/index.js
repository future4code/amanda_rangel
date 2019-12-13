import axios from "axios";

const token = window.localStorage.getItem("token");


export const setTrips = (trips) => ({
  type: "SET_TRIPS",
  payload: {
    trips
  }
});

export const fetchTrips= () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/futureX/amanda/trips",
    {
      headers: {
        auth: token,
      }
    });
  

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
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/amanda/trip/${tripId}`,
    {
      headers: {
        auth: token,
      }
    });
  
  dispatch(setSelectedTrip(response.data.trip));
};

export const postTripCandidate = (name, age, applicationText, profession, country, tripId) =>  async (dispatch) => {
    const data = {
      name:name, 
      age:age, 
      applicationText: applicationText, 
      profession: profession, 
      country: country, 
      tripId: tripId
    }
      await axios.post(
      `https://us-central1-missao-newton.cloudfunctions.net/futureX/amanda/trips/${tripId}/apply`,
      data
    ); 
  };

export const createNewTrip = (name, planet, date, description,durationInDays) =>  async (dispatch) => {
    const data = {
      name:name,
      planet:planet,
      date:date,
      description:description,
      durationInDays:durationInDays,
    }
    await axios.post(
      `https://us-central1-missao-newton.cloudfunctions.net/futureX/amanda/trips`,
      data,
      {
        headers: {
          auth: token,
        }
      });
  };

  export const selectCandidate=(tripId, candidateId, approve)=> async(dispatch)=>{
  
    await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/futureX/amanda/trips/${tripId}/candidates/${candidateId}/decide`,
    {
      approve,
    },
    {
      headers:{
        auth: token
      }
    })
    
  };

  