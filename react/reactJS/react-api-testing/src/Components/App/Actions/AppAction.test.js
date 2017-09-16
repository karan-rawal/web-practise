import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import axios from 'axios';
import { setPhotosAction, getPhostosAction } from './AppActions';
import { ACTIONS } from '../Constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const photos = [
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
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'http://placehold.it/600/771796',
    thumbnailUrl: 'http://placehold.it/150/771796',
  },
];

const expectedSetPhotosAction = {
  type: ACTIONS.SET_PHOTOS_ACTION,
  payload: {
    photos,
  },
};

describe('App Action', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
    sandbox.restore();
  });

  it('SetPhotosAction is as expected.', () => {
    expect(setPhotosAction(photos)).toEqual(expectedSetPhotosAction);
  });

  it('The success of getPhotosAction should produce proper setPhotosAction.', () => {
    /* mock the data */
    const resolved = new Promise(r => r(
      {
        data: photos,
      },
    ));
    sandbox.stub(axios, 'get').returns(resolved);

    const store = mockStore();
    return store.dispatch(getPhostosAction()).then(() => {
      expect(store.getActions()[0]).toEqual(expectedSetPhotosAction);
    });
  });
});
