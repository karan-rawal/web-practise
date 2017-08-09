import ACTIONS from '../Constants';

const initialState = {
  message: "Hello from App's reducer",
};

/**
 * The AppComponent's reducer
 * 
 * @param {any} [state=initialState] 
 * @param {any} action 
 * @returns 
 */
const AppReducer = (state = initialState, action) => {
  const tempState = Object.assign({}, state);

  switch (action.type) {
    case ACTIONS.ACTION_BUTTON_CLICK:
      tempState.message = 'Button clicked';
      break;
    default:
      console.log('No action performed.');
  }

  return tempState;
};

export default AppReducer;
