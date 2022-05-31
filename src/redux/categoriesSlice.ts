import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { catsAPI } from "../api/api";

export interface ICategory {
  name: string;
  id: number;
}

export interface ICategories {
  categories: ICategory[];
  status: "loading" | "success" | "failed" | "";
  selectedCategory: string;
}

const initialState: ICategories = {
  categories: [],
  status: "",
  selectedCategory: "",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.categories = action.payload;
      })
      .addCase(getCategoriesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const getCategoriesAsync = createAsyncThunk("categories/fetchData", async () => {
  const response = await catsAPI.getCategories();
  return response.data;
});

export const { setSelected } = categoriesSlice.actions;

export default categoriesSlice.reducer;
