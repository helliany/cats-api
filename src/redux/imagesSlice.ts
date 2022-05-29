import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { catsAPI } from "../api/api";

export interface IImage {
  id?: string;
  url?: string;
}

export interface IImages {
  image: IImage;
  status: "loading" | "success" | "failed" | "";
}

const initialState: IImages = {
  image: {},
  status: "",
};

export const categoriesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImagesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getImagesAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.image = action.payload;
      })
      .addCase(getImagesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const getImagesAsync = createAsyncThunk("images/fetchData", async () => {
  const response = await catsAPI.getImage();
  return response.data[0];
});

export default categoriesSlice.reducer;
