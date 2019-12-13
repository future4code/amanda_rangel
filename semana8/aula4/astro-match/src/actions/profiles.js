import axios from 'axios'
export const setProfiles = profile => ({
	type: "SET_PROFILE_SWIPE",
	payload: {
			profile
	}
});

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
}

 export const getProfileToSwipe = () => async dispatch => {
	 const response = await axios.get( 
		 "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/amanda/person"
		 );
		
		dispatch(setProfiles(response.data.profile));
 };

