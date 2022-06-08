import breedsReducer, {
  getBreedsAsync,
  IBreeds,
  setSelected,
} from '../breedsSlice';
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

describe('breeds reducer', () => {
  const initialState: IBreeds = {
    breeds: [],
    status: "",
    selectedBreed: "",
  };
  it('should handle initial state', () => {
    expect(breedsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle selectedBreed', () => {
    const actual = breedsReducer(initialState, setSelected('beng'));
    expect(actual.selectedBreed).toEqual('beng');
  });

  it('should pass', async () => {
    const postSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce('first call');
    const store = configureStore({
      reducer: function (state = '', action) {
        switch (action.type) {
          case 'breeds/fetchData/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(getBreedsAsync());
    expect(postSpy).toHaveBeenCalled();
    const state = store.getState();
    expect(state).toEqual([]);
  });
});
