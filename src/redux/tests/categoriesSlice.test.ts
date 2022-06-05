import categoriesReducer, {
  ICategories,
  setSelected,
} from '../categoriesSlice';

describe('categories reducer', () => {
  const initialState: ICategories = {
    categories: [],
    status: "",
    selectedCategory: "",
  };
  it('should handle initial state', () => {
    expect(categoriesReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle selectedCategory', () => {
    const actual = categoriesReducer(initialState, setSelected('5'));
    expect(actual.selectedCategory).toEqual('5');
  });
});
