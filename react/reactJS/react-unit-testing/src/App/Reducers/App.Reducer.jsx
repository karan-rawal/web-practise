import { ACTION, COMPONENT } from '../Constants';

const initialState = {
  message: COMPONENT.DEFAULT_MESSAGE,
};

/**
 * The AppReducer.
 * 
 * @param {any} [state=initialState] 
 * @param {any} action 
 * @returns 
 */
const AppReducer = (state = initialState, action) => {
  const tempState = Object.assign({}, state);

  switch (action.type) {
    case ACTION.CHANGE_MESSAGE:
      tempState.message = action.payload.message;
      break;
    default:
  }

  return tempState;
};

export default AppReducer;
