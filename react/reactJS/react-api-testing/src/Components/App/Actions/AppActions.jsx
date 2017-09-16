import axios from 'axios';
import { ACTIONS } from '../Constants';


/**
 * Set photos action creator.
 * 
 * @export
 * @param {any} photos 
 * @returns 
 */
export function setPhotosAction(photos) {
  return {
    type: ACTIONS.SET_PHOTOS_ACTION,
    payload: {
      photos,
    },
  };
}

/**
 * Get photos action creator. Will call the api.
 * 
 * @export
 * @returns 
 */
export function getPhostosAction() {
  return dispatch => axios.get('https://jsonplaceholder.typicode.com/photos', {})
    .then((response) => {
      dispatch(setPhotosAction(response.data));
    });
}
