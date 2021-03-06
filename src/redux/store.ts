import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import breedsReducer from './breedsSlice';
import categoriesReducer from './categoriesSlice';
import imagesReducer from './imagesSlice';
import fileTypesReducer from './fileTypesSlice';

export const store = configureStore({
  reducer: {
    breeds: breedsReducer,
    categories: categoriesReducer,
    images: imagesReducer,
    files: fileTypesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
