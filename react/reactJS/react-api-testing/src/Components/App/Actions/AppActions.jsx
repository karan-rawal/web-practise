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
 * @param {any} photos 
 * @returns 
 */
export function getPhostosAction(photos) {
  return {
    type: ACTIONS.GET_PHOTOS_ACTION,
    payload: {
      photos,
    },
  };
}
