import imagesReducer, {
  IImages,
} from '../imagesSlice';

describe('breeds reducer', () => {
  const initialState: IImages = {
    image: {},
    status: "",
  };
  it('should handle initial state', () => {
    expect(imagesReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });
  
});
