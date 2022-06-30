import fileTypesReducer, {
  setSelected,
} from '../fileTypesSlice';

describe('breeds reducer', () => {
  const initialState = {
    fileTypes: {
      animated: "gif",
      static: "jpg, png",
      all: "gif, jpg, png",
    } as const,
    selectedFileType: "",
  };
  it('should handle initial state', () => {
    expect(fileTypesReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle selectedFileType', () => {
    const actual = fileTypesReducer(initialState, setSelected('gif'));
    expect(actual.selectedFileType).toEqual('gif');
  });
});
