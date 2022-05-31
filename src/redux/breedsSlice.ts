import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { catsAPI } from "../api/api";

export interface IBreed {
  name: string;
  id: string;
}

export interface IBreeds {
  breeds: IBreed[];
  status: "loading" | "success" | "failed" | "";
  selectedBreed: string;
}

const initialState: IBreeds = {
  breeds: [],
  status: "",
  selectedBreed: "",
};

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<string>) => {
      state.selectedBreed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBreedsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBreedsAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.breeds = action.payload;
      })
      .addCase(getBreedsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const getBreedsAsync = createAsyncThunk("breeds/fetchData", async () => {
  const response = await catsAPI.getBreeds();
  return response.data;
});

export const { setSelected } = breedsSlice.actions;

export default breedsSlice.reducer;
