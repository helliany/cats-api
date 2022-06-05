import breedsReducer, {
  IBreeds,
  setSelected,
} from '../breedsSlice';

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
});
