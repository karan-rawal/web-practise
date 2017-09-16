import { ACTIONS } from '../Constants';

const initialState = {
  photos: [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'http://placehold.it/600/92c952',
      thumbnailUrl: 'http://placehold.it/150/92c952',
    },
    {
      albumId: 1,
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'http://placehold.it/600/771796',
      thumbnailUrl: 'http://placehold.it/150/771796',
    },
  ],
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
