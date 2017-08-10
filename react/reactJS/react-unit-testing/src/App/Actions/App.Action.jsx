import { ACTION } from '../Constants';

/**
 * Action to change the message.
 * 
 * @param {any} message 
 */
export const ChangeMessageAction = message => ({
  type: ACTION.CHANGE_MESSAGE,
  payload: {
    message,
  },
});

/**
 * Action to reset the message.
 * 
 * 
 */
export const ResetMessageAction = () => ({
  type: ACTION.RESET_MESSAGE,
});
