import { ACTIONS } from '../Constants';

const initialState = {
  photos: ['asdf'],
};

/**
 * Reducer for the app component.
 * 
 * @param {any} [state=initialState] 
 * @param {any} action 
 * @returns 
 */
const AppReducer = (state = initialState, action) => {
  const tempState = Object.assign({}, state);
  switch (action.type) {
    case ACTIONS.SET_PHOTOS_ACTION:
      tempState.photos = action.payload.photos;
      break;
    case ACTIONS.GET_PHOTOS_ACTION:
      break;
  }

  return tempState;
};

export default AppReducer;
